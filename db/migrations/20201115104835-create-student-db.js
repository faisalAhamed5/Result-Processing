'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_db', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      s_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.NUMERIC
      },
      s_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dept_id: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      batch: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      exam_roll: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      reg_no: {
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
    await queryInterface.dropTable('student_db');
  }
};