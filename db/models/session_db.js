'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class session_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  session_db.init({
    session_id: DataTypes.CHAR,
    month: DataTypes.CHAR,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'session_db',
  });
  return session_db;
};