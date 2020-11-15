'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dept_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dept_db.init({
    dept_id: DataTypes.CHAR,
    dept_name: DataTypes.CHAR,
    degree: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'dept_db',
  });
  return dept_db;
};