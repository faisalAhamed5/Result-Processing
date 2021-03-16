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
      subject_db.belongsTo(models.dept_db, { foreignKey: "dept_id", onDelete: "RESTRICT", onUpdate: "CASCADE" });
      subject_db.hasMany(models.sub_assign_db, { foreignKey: "sub_id", onDelete: "RESTRICT", onUpdate: "CASCADE" });
      subject_db.hasMany(models.results_db, { foreignKey: "sub_id", onDelete: "RESTRICT", onUpdate: "CASCADE" });
      
    }
  }
  subject_db.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        unique:true,
        type: DataTypes.INTEGER
      },
    sub_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique:true
    },
    sub_name:  {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    sub_code:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    dept_id:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    credit: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    total_marks: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'subject_db',
  });
  return subject_db;
};