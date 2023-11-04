'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_jogador: {
        type: Sequelize.STRING
      },
      posicao: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      fk_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Times', key:'id'},
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jogadores');
  }
};