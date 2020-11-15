'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('president_db', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dept_id: {
        type: Sequelize.CHAR
      },
      t_name: {
        type: Sequelize.CHAR
      },
      t_email: {
        type: Sequelize.STRING
      },
      session_id: {
        type: Sequelize.CHAR
      },
      semester: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('president_db');
  }
};