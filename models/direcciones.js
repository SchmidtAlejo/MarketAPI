'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direcciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Direcciones.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId',
        targetKey: 'id'
      })
      Direcciones.hasMany(models.Compras, {
        foreignKey: "direccionId",
      });
    }
  }
  Direcciones.init({
    provincia: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    codigoPostal: DataTypes.INTEGER,
    piso: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Direcciones',
  });
  return Direcciones;
};