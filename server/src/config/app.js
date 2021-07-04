const config = {
    port: process.env.PORT || 5000,
    permissions: {
        roles: ['customer', 'creator'],
    },
    jwt: {tokenExpiresIn: process.env.ACCESS_TOKEN_EXP || '30m',
        tokenSecret: process.env.ACCESS_TOKEN_SECRET || 'access token secret value',
    },
};
module.exports = config;