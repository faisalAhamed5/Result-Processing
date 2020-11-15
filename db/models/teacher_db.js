'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  teacher_db.init({
    t_name: DataTypes.CHAR,
    t_email: DataTypes.STRING,
    t_pass: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    dept_id: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'teacher_db',
  });
  return teacher_db;
};