module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Banks',
      [
        {
          cardNumber: '4564654564564564',
          name: 'SquadHelp',
          expiry: '11/22',
          cvc: '453',
          balance: 0,
        },
        {
          cardNumber: '4111111111111111',
          name: 'buyer',
          expiry: '09/23',
          cvc: '505',
          balance: 5000,
        },
        {
          cardNumber: '4111111111112345',
          name: 'creator',
          expiry: '09/23',
          cvc: '505',
          balance: 0,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Banks', null, {});
  },
};
