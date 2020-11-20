'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('results_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sem_sub_id: {
        type: Sequelize.CHAR
      },
      session_id: {
        type: Sequelize.CHAR
      },
      q1: {
        type: Sequelize.NUMERIC
      },
      q2: {
        type: Sequelize.NUMERIC
      },
      q3: {
        type: Sequelize.NUMERIC
      },
      q4: {
        type: Sequelize.NUMERIC
      },
      q5: {
        type: Sequelize.NUMERIC
      },
      q6: {
        type: Sequelize.NUMERIC
      },
      q7: {
        type: Sequelize.NUMERIC
      },
      q8: {
        type: Sequelize.NUMERIC
      },
      q9: {
        type: Sequelize.NUMERIC
      },
      t1: {
        type: Sequelize.NUMERIC
      },
      t2: {
        type: Sequelize.NUMERIC
      },
      m1: {
        type: Sequelize.NUMERIC
      },
      attendance: {
        type: Sequelize.NUMERIC
      },
      exam_type: {
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
    await queryInterface.dropTable('results_dbs');
  }
};