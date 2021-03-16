'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chairman_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  chairman_db.init({
    president: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
    email: {
      allowNull:false,
      type: DataTypes.STRING
    },
    session_id: {
      allowNull:false,
      type: DataTypes.STRING
    },
    semester: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    dept_id: {
      allowNull:false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'chairman_db',
  });
  return chairman_db;
};