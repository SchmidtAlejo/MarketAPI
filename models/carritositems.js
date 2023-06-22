"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarritosItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarritosItems.belongsTo(models.Carritos, {
        foreignKey: "carritoId",
        targetKey: "id",
      });
      CarritosItems.belongsTo(models.Productos, {
        foreignKey: "productoId",
        targetKey: "id",
      });
    }
  }
  CarritosItems.init(
    {
      carritoId: DataTypes.INTEGER,
      productoId: DataTypes.INTEGER,
      valorUnitario: DataTypes.INTEGER,
      cantidad: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CarritosItems",
    }
  );
  return CarritosItems;
};
