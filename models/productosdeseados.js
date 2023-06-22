'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductosDeseados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductosDeseados.belongsTo(models.Usuarios, {
        foreignKey: "usuarioId",
        targetKey: "id",
      });
      ProductosDeseados.belongsTo(models.Productos, {
        foreignKey: "productoId",
        targetKey: "id",
      });
    }
  }
  ProductosDeseados.init({
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductosDeseados',
  });
  return ProductosDeseados;
};