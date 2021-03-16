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
      student_db.belongsTo(models.dept_db, { foreignKey: "dept_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      student_db.belongsTo(models.user_db, { foreignKey: "email", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      student_db.hasMany(models.results_db, { foreignKey: "s_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
    }
  };
  student_db.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
    s_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[3,40]
      }
    },
    dept_id:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    batch:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt:true
      }
    }, 
    exam_roll: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt:true
      }
    },
    reg_no: {
      type: DataTypes.STRING,
      allowNull: false
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false
    },
    s_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      unique: true,
      validate: {
        isAlphanumeric:true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:true
      }
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'student_db',
  });
  return student_db;
};