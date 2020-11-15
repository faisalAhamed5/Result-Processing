'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class president_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  president_db.init({
    dept_id: DataTypes.CHAR,
    t_name: DataTypes.CHAR,
    session_id: DataTypes.CHAR,
    semester: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'president_db',
  });
  return president_db;
};