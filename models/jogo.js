'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jogo.init({
    fk_time_casa: DataTypes.INTEGER,
    fk_time_fora: DataTypes.INTEGER,
    fk_campeonato: DataTypes.INTEGER,
    fk_estadio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jogo',
  });
  return Jogo;
};