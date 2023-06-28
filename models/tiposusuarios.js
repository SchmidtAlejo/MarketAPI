'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiposUsuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TiposUsuarios.hasMany(models.Usuarios, {
        foreignKey: "tipoUsuariosId",
      });
    }
  }
  TiposUsuarios.init({
    usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TiposUsuarios',
  });
  return TiposUsuarios;
};