'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('results_dbs', {
      result_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      session_id: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:
        {
          len: [3, 25]
        }
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
      q10: {
        type: Sequelize.NUMERIC
      },
      q11: {
        type: Sequelize.NUMERIC
      },
      q12: {
        type: Sequelize.NUMERIC
      },
      q13: {
        type: Sequelize.NUMERIC
      },
      q14: {
        type: Sequelize.NUMERIC
      },
      q15: {
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
      viva: {
        type: Sequelize.NUMERIC
      },
      lab: {
        type: Sequelize.NUMERIC
      },
      attendance: {
        type: Sequelize.NUMERIC
      },
      practical: {
        type: Sequelize.NUMERIC
      },
      clinical: {
        type: Sequelize.NUMERIC
      },
      obtainedMarks: {
        type: Sequelize.NUMERIC
      },
      obtained70Marks: {
        type: Sequelize.NUMERIC
      },
      exam_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      s_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      teacher_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      teacher_email:{
      type: Sequelize.STRING,
      allowNull:false
    },
    role_id:{
      type: Sequelize.STRING,
      allowNull:false
      },
    result_type:{
      type: Sequelize.STRING,
      allowNull:false
      },
    exam_roll:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
      dept_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      review:{
      type: Sequelize.BOOLEAN,
      
      },
      thirtyPercentMark:{
      type: Sequelize.BOOLEAN,
      
    },
    publish:{
      type: Sequelize.BOOLEAN,
      
      },
    result:{
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
    await queryInterface.dropTable('results_dbs');
  }
};