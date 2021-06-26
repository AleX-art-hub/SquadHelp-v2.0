const config = {
    port: process.env.PORT || 5000,
    permissions: {
        roles: ['customer', 'creator'],
    },
};
module.exports = config;