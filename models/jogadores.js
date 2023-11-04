'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jogadores.init({
    nome_jogador: DataTypes.STRING,
    posicao: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    fk_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jogadores',
  });
  return Jogadores;
};