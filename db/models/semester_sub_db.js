'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class semester_sub_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  semester_sub_db.init({
    sem_sub_id: DataTypes.CHAR,
    sub_id: DataTypes.CHAR,
    semester: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'semester_sub_db',
  });
  return semester_sub_db;
};