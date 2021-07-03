
const { Transactions } = require('../../models');
const UserNoFound = require('../../errors/UserNotFoundError');

module.exports.getHistoryByUserId = async (userId) => {
    const result = await Transactions.findAll({
    where: {
        userId,
    },
    });
    if (result.length !== 0) return result;
    throw new UserNoFound('No transaction for user');
};