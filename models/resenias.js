'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resenias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resenias.belongsTo(models.Usuarios, {
        foreignKey: "usuarioId",
        targetKey: "id",
      });
      Resenias.belongsTo(models.Productos, {
        foreignKey: "productoId",
        targetKey: "id",
      });
    }
  }
  Resenias.init({
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    valoracion: DataTypes.STRING,
    comentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Resenias',
  });
  return Resenias;
};