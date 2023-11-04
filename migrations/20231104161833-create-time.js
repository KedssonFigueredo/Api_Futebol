'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_time: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      fk_tecnico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'Tecnicos', key:'id'},
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
    await queryInterface.dropTable('Times');
  }
};