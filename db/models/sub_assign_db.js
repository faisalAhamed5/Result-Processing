'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_assign_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sub_assign_db.init({
    t_name: DataTypes.CHAR,
    sem_sub_id: DataTypes.CHAR,
    session_id: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'sub_assign_db',
  });
  return sub_assign_db;
};