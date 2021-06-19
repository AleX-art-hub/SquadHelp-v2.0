const { hash, hashSync } = require('bcrypt');
const CONSTANTS = require('./../constants');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'buyerf',
          lastName: 'buyerl',
          displayName: 'buyerdn',
          password: hashSync('qwerty', CONSTANTS.SALT_ROUNDS),
          email: 'buyer1@gmail.com',
          role: 'customer',
          balance: 100000,
        },
        {
          firstName: 'creativef',
          lastName: 'creativel',
          displayName: 'creativedn',
          password: hashSync('qwerty', CONSTANTS.SALT_ROUNDS),
          email: 'creative1@gmail.com',
          role: 'creator',
          balance: 100,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
