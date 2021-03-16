'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subject_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique:true,
        type: Sequelize.INTEGER
      },
      sub_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      unique:true
    },
    sub_name:  {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    sub_code:  {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    dept_id:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    credit: {
      type: Sequelize.NUMERIC,
      allowNull: false
      },
    total_marks: {
      type: Sequelize.NUMERIC,
      allowNull: false
      },
    semester: {
      type: Sequelize.INTEGER,
      allowNull: false
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
    await queryInterface.dropTable('subject_dbs');
  }
};