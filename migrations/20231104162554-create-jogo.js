'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_time_casa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Times', key:'id'},
        onDelete:'CASCADE'
      },
      fk_time_fora: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Times', key:'id'},
        onDelete:'CASCADE'
      },
      fk_campeonato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Campeonatos', key:'id'},
        onDelete:'CASCADE'
      },
      fk_estadio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Estadios', key:'id'},
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
    await queryInterface.dropTable('Jogos');
  }
};