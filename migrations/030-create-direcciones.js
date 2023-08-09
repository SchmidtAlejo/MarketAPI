'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Direcciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      provincia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: false
      },
      calle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      codigoPostal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      piso: {
        type: Sequelize.STRING,
        allowNull: true
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'       
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
    await queryInterface.dropTable('Direcciones');
  }
};