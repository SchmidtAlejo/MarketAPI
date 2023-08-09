"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.belongsTo(models.Usuarios, {
        foreignKey: "usuarioId",
        targetKey: "id",
      });
      Compras.belongsTo(models.Carritos, {
        foreignKey: "carritoId",
        targetKey: "id",
      });
      Compras.belongsTo(models.Direcciones, {
        foreignKey: 'direccionId',
        targetKey: 'id'
      })
    }
  }
  Compras.init(
    {
      usuarioId: DataTypes.INTEGER,
      carritoId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      direccionId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Compras",
    }
  );
  return Compras;
};
