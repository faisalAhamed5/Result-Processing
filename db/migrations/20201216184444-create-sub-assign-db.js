'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sub_assign_dbs', {
      assign_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email:{
      allowNull:false,
      type: Sequelize.STRING
    },
      sub_id: {
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
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('sub_assign_dbs');
  }
};