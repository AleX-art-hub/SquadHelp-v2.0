'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Transactions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        typeOperation: {
          type: Sequelize.ENUM('income', 'expense'),
          allowNull: false,
        },
        sum: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
      })
      .then(() =>
        queryInterface.addConstraint('Transactions', ['sum'], {
          type: 'check',
          where: {
            sum: {
              [Sequelize.Op.gte]: 0,
            },
          },
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  },
};