'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  student_db.init({
    s_name: DataTypes.STRING,
    dept_id: DataTypes.CHAR,
    batch: DataTypes.INTEGER,
    exam_roll: DataTypes.INTEGER,
    reg_no: DataTypes.CHAR,
    degree: DataTypes.CHAR,
    s_id: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'student_db',
  });
  return student_db;
};