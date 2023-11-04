'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Time.init({
    nome_time: DataTypes.STRING,
    cidade: DataTypes.STRING,
    fk_tecnico: DataTypes.INTEGER,
    fk_estadio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Time',
  });
  return Time;
};