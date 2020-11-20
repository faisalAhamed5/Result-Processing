'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      s_name: {
        type: Sequelize.STRING
      },
      dept_id: {
        type: Sequelize.CHAR
      },
      batch: {
        type: Sequelize.INTEGER
      },
      exam_roll: {
        type: Sequelize.INTEGER
      },
      reg_no: {
        type: Sequelize.CHAR
      },
      degree: {
        type: Sequelize.CHAR
      },
      s_id: {
        type: Sequelize.NUMERIC
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
    await queryInterface.dropTable('student_dbs');
  }
};