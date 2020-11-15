'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  admin_db.init({
    admin_name: DataTypes.CHAR,
    admin_email: DataTypes.STRING,
    admin_pass: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    dept_id: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'admin_db',
  });
  return admin_db;
};