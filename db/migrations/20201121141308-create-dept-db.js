'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dept_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      dept_id: {
        allowNull: false,
        type: Sequelize.CHAR,
        primaryKey: true
      },
      dept_name: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      degree: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dept_dbs');
  }
};