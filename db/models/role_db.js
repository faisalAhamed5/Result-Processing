'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role_db.init({
    role_id: DataTypes.CHAR,
    role: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'role_db',
  });
  return role_db;
};