'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_dbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:
        {
          len: [3, 25]
        }
      },
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        validate:
        {
          notNull: true,
          isEmail:true
        }
      },
      pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dept_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      active: {
      allowNull: false,
      type:Sequelize.BOOLEAN
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
    await queryInterface.dropTable('user_dbs');
  }
};