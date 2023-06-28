'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contrasenia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dni: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nroTelefono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nroTarjeta: {
        type: Sequelize.STRING
      },
      nombreTarjeta: {
        type: Sequelize.STRING
      },
      vencimientoTarjeta: {
        type: Sequelize.STRING
      },
      codigoTarjeta: {
        type: Sequelize.STRING
      },
      tipoUsuariosId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'TiposUsuarios',
          key: 'id'
        },
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
    await queryInterface.dropTable('Usuarios');
  }
};