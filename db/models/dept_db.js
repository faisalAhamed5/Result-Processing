'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dept_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dept_db.hasMany(models.user_db, { foreignKey: "dept_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      dept_db.hasMany(models.subject_db, { foreignKey: "dept_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      dept_db.hasMany(models.student_db, { foreignKey: "dept_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      dept_db.hasMany(models.sub_assign_db,{foreignKey:"dept_id",onDelete:'RESTRICT', onUpdate: 'CASCADE' });
    }
  };
  dept_db.init({
    dept_id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true
      },
      dept_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      degree: {
        allowNull: false,
        type: DataTypes.STRING
      },
  }, {
    sequelize,
    modelName: 'dept_db',
  });
  return dept_db;
};