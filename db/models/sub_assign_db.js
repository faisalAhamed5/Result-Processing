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
      sub_assign_db.belongsTo(models.subject_db, { foreignKey: "sub_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      sub_assign_db.belongsTo(models.session_db, { foreignKey: "session_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      sub_assign_db.belongsTo(models.user_db, { foreignKey: "email", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      sub_assign_db.belongsTo(models.dept_db, { foreignKey: "dept_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
    }
  };
  sub_assign_db.init({
    assign_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    email:{
      allowNull:false,
      type: DataTypes.STRING
    },
    sub_id: {
      allowNull:false,
      type: DataTypes.STRING
    },
    session_id: {
      allowNull:false,
      type: DataTypes.STRING
    },
    dept_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    semester: {
      allowNull:false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'sub_assign_db',
  });
  return sub_assign_db;
};