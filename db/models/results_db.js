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
    }
  };
  results_db.init({
    sem_sub_id: DataTypes.CHAR,
    session_id: DataTypes.CHAR,
    q1: DataTypes.NUMERIC,
    q2: DataTypes.NUMERIC,
    q3: DataTypes.NUMERIC,
    q4: DataTypes.NUMERIC,
    q5: DataTypes.NUMERIC,
    q6: DataTypes.NUMERIC,
    q7: DataTypes.NUMERIC,
    q8: DataTypes.NUMERIC,
    q9: DataTypes.NUMERIC,
    t1: DataTypes.NUMERIC,
    t2: DataTypes.NUMERIC,
    m1: DataTypes.NUMERIC,
    attendance: DataTypes.NUMERIC,
    exam_category: DataTypes.CHAR,
    s_id: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'results_db',
  });
  return results_db;
};