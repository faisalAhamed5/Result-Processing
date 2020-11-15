'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subject_db', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      sub_id: {
        type: Sequelize.CHAR,
        primaryKey: true
      },
      sub_name: {
        type: Sequelize.CHAR
      },
      sub_code: {
        type: Sequelize.CHAR
      },
      dept_id: {
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
    await queryInterface.dropTable('subject_db');
  }
};