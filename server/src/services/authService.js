const jwtService = require('./jwtService');
const _ = require('lodash');
const { v4: uuidV4 } = require('uuid');
const config = require('../config/app');
const { REFRESH_TOKEN_EXP } = require('../constants');

const {
  jwt: { tokenExpiresIn, tokenSecret },
} = config;

function prepareUser(userInstance) {
  const userDataValue = userInstance.get();
  return _.omit(userDataValue, ['password']);
}

async function createTokenPair(userInstance) {
  return {
    accessToken: await jwtService.sign(
      {
        userId: userInstance.get('id'),
        userRole: userInstance.get('role'),
      },
      tokenSecret,
      {
        expiresIn: tokenExpiresIn,
      }
    ),
    refreshToken: {
      token: uuidV4(),
      expiredIn: Sequelize.literal(
        `CURRENT_TIMESTAMP + '${REFRESH_TOKEN_EXP}'::interval`
      ),
    },
  };
}

exports.createSession = async (userInstance) => {
  const { accessToken, refreshToken } = await createTokenPair(userInstance);
  if ((await userInstance.countRefreshTokens()) >= 3) {
    const [oldUserRefreshToken] = await userInstance.getRefreshTokens({
      order: [['updatedAt', 'ASC']],
    });
    await oldUserRefreshToken.update({ token: refreshToken });
  } else {
    await userInstance.countRefreshTokens(refreshToken);
  }
  return {
    user: prepareUser(userInstance),
    tokenPair: refreshToken.token,
  };
};
exports.refreshSession = async (refreshTokenInstance) => {
  const userInstance = await refreshTokenInstance.getUser();
  const { accessToken, refreshToken } = await createTokenPair(userInstance);
  return {
    user: prepareUser(userInstance),
    tokenPair: { accessToken, refreshToken: refreshToken.token },
  };
};