'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_db.init({
    username: DataTypes.CHAR,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    role_id: DataTypes.CHAR,
    dept_id: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user_db',
  });
  return user_db;
};