'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class results_db extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      results_db.belongsTo(models.student_db, { foreignKey: "s_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      results_db.belongsTo(models.subject_db, { foreignKey: "sub_id", onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      
    }
  }
  results_db.init({
    result_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    semester: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    sub_id: {
      type: DataTypes.STRING,
      allowNull:false
    },
    session_id:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:
        {
          len: [3, 25]
        }
    },
    q1: DataTypes.NUMERIC,
    q2: DataTypes.NUMERIC,
    q3: DataTypes.NUMERIC,
    q4: DataTypes.NUMERIC,
    q5: DataTypes.NUMERIC,
    q6: DataTypes.NUMERIC,
    q7: DataTypes.NUMERIC,
    q8: DataTypes.NUMERIC,
    q9: DataTypes.NUMERIC,
    q10: DataTypes.NUMERIC,
    q11: DataTypes.NUMERIC,
    q12: DataTypes.NUMERIC,
    q13: DataTypes.NUMERIC,
    q14: DataTypes.NUMERIC,
    q15: DataTypes.NUMERIC,
    t1: DataTypes.NUMERIC,
    t2: DataTypes.NUMERIC,
    m1: DataTypes.NUMERIC,
    viva: DataTypes.NUMERIC,
    lab: DataTypes.NUMERIC,
    attendance: DataTypes.NUMERIC,
    practical: DataTypes.NUMERIC,
    clinical: DataTypes.NUMERIC,
    obtainedMarks: DataTypes.NUMERIC,
    obtained70Marks: DataTypes.NUMERIC,
    exam_type:{
      type: DataTypes.STRING,
      allowNull:false
    },
    dept_id:{
      type: DataTypes.STRING,
      allowNull:false
    },
    s_id: {
      type: DataTypes.STRING,
      allowNull:false
    },
    teacher_name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    teacher_email:{
      type: DataTypes.STRING,
      allowNull:false
    },
    role_id:{
      type: DataTypes.STRING,
      allowNull:false
    },
    result_type:{
      type: DataTypes.STRING,
      allowNull:false
    },
    exam_roll:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review:{
      type: DataTypes.BOOLEAN,
      
    },
    thirtyPercentMark:{
      type: DataTypes.BOOLEAN,
      
    },
    publish:{
      type: DataTypes.BOOLEAN,
      
    },
    result:{
      type: DataTypes.STRING,
      
    },
  }, {
    sequelize,
    modelName: 'results_db',
  });
  return results_db;
};