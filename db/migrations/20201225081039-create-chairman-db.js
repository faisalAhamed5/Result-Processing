'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chairman_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chairman: {
        allowNull: false, 
        type: Sequelize.BOOLEAN
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      session_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      semester: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dept_id: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('chairman_dbs');
  }
};