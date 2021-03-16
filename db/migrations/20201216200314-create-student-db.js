'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      s_name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
        len:[3,40]
      }
      },
      dept_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      batch: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
        isInt:true
      }
      },
      exam_roll: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
        isInt:true
      }
      },
      reg_no: {
        allowNull: false,
        type: Sequelize.STRING
      },
      degree: {
        allowNull: false,
        type: Sequelize.STRING
      },
      s_id: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        validate: {
        isAlphanumeric:true
      }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
        isEmail:true
      }
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
    await queryInterface.dropTable('student_dbs');
  }
};