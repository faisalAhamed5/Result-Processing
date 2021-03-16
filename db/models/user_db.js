'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_db.belongsTo(models.dept_db,{foreignKey:"dept_id",onDelete:'RESTRICT',onUpdate:'CASCADE'});
      user_db.belongsTo(models.role_db, { foreignKey: "role_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      user_db.hasMany(models.sub_assign_db, { foreignKey: "email", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      user_db.hasMany(models.student_db, { foreignKey: "email", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
    }
  };
  user_db.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER
      },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate:
        {
          len: [3, 25]
        }
      },
      email: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
        validate:
        {
          notNull: true,
          isEmail:true
        }
      },
      pass: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role_id: {
        allowNull: false,
        type: DataTypes.STRING
      },
      dept_id: {
        allowNull: false,
        type: DataTypes.STRING
    },
    active: {
      allowNull: false,
      type:DataTypes.BOOLEAN
      }
      
  },
    {
    sequelize,
    modelName: 'user_db',
    });
  
  return user_db;
};