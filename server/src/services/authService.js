const jwtService = require('./jwtService');
exports.createSession = async userInstance => {
    const{accessToken, refreshToken} = await jwtService.signTokenPair({
        id: userInstance.getDataValue('id'),
        role: userInstance.getDataValue('role'),
    });
    if((await userInstance.countRefreshTokens())>=3){
        const [
            oldUserRefreshToken
        ] = await userInstance.getRefreshTokens({
            order: [['updatedAt', 'ASC']]
        });
        await oldUserRefreshToken.update({token: refreshToken});
    } else {
        await userInstance.countRefreshTokens({
            token: refreshToken
        });
    }
    return{
        user: prepareUser(userInstance),
        tokenPair: {accessToken, refreshToken},
    };
};

exports.refreshSession = async refreshTokenInstance => {
    const userInstance = await refreshTokenInstance.getUser();
    if(userInstance){
    const{accessToken, refreshToken} = await jwtService.signTokenPair({
        id: userInstance.getDataValue('id'),
        role: userInstance.getDataValue('role'),
    });
    await refreshTokenInstance.update({token: refreshToken});
    return{
        user: prepareUser(userInstance),
        tokenPair: {accessToken, refreshToken}
    };
};
};
function prepareUser(userInstance){
    const userDataValue = userInstance.get();
    return _.omit(userDataValue, ['password']);
};

