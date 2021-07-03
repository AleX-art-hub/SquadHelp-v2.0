module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Transactions',
      [
        {
          userId: 1,
          typeOperation: 'income',
          sum: 105,
        },
        {
          userId: 1,
          typeOperation: 'expense',
          sum: 70,
        },
        {
          userId: 1,
          typeOperation: 'income',
          sum: 260,
        },
        {
          userId: 2,
          typeOperation: 'income',
          sum: 500,
        },
        {
          userId: 2,
          typeOperation: 'expense',
          sum: 300,
        },
      ],
      {},
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  },
};