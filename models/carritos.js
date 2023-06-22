'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carritos.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId',
        targetKey: 'id'
      })
      Carritos.hasOne(models.Compras, {
        foreignKey: 'carritoId'
      })
      Carritos.hasOne(models.CarritosItems, {
        foreignKey: 'carritoId'
      })
    }
  }
  Carritos.init({
    usuarioId: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
    subtotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carritos',
  });
  return Carritos;
};