'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subject_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  subject_db.init({
    sub_id: DataTypes.CHAR,
    sub_name: DataTypes.CHAR,
    sub_code: DataTypes.CHAR,
    dept_id: DataTypes.CHAR,
    credit:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subject_db',
  });
  return subject_db;
};