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
      session_db.hasMany(models.sub_assign_db, { foreignKey: "session_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      
    }
  };
  session_db.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
    session_id: {
      allowNull: false,
      primaryKey:true,
      type: DataTypes.STRING
    },
    month: {
      allowNull: false,
      type: DataTypes.STRING
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'session_db',
  });
  return session_db;
};