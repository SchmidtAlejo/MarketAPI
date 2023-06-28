"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsTo(
        models.TiposUsuarios,{
          foreignKey: 'tipoUsuariosId',
          targetKey: 'id'
        }
      )
      Usuarios.hasMany(models.Direcciones, {
        foreignKey: "usuarioId",
      });
      Usuarios.hasMany(models.Carritos, {
        foreignKey: "usuarioId",
      });
      Usuarios.hasMany(models.Compras, {
        foreignKey: "usuarioId",
      });
      Usuarios.hasMany(models.ProductosDeseados, {
        foreignKey: "usuarioId",
      });
      Usuarios.hasMany(models.Resenias, {
        foreignKey: "usuarioId",
      });
    }
  }
  Usuarios.init(
    {
      email: DataTypes.STRING,
      contrasenia: DataTypes.STRING,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      dni: DataTypes.STRING,
      nroTelefono: DataTypes.STRING,
      nroTarjeta: DataTypes.STRING,
      nombreTarjeta: DataTypes.STRING,
      vencimientoTarjeta: DataTypes.STRING,
      codigoTarjeta: DataTypes.STRING,
      tipoUsuariosId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
