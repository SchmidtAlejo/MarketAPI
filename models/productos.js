'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsTo(models.Categorias, {
        foreignKey: 'categoriaId',
        targetKey: 'id'
      });
      Productos.hasMany(models.ProductosDeseados, {
        foreignKey: 'productoId'
      });
      Productos.hasMany(models.Resenias, {
        foreignKey: 'productoId'
      });
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    descripciones: DataTypes.TEXT,
    precio: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    ventas: DataTypes.INTEGER,
    categoriaId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};