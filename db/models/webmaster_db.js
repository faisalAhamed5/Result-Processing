'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class webmaster_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  webmaster_db.init({
    m_email: DataTypes.STRING,
    m_pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'webmaster_db',
  });
  return webmaster_db;
};