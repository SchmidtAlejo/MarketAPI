const data = require("./../data/carritos");

async function getCarritoByPk(id) {
  return await data.getCarritoByPk(id);
}

async function getCarritoActivo(usuarioId) {
  return await data.getCarritoActivo(usuarioId);
}

async function desactivarCarrito(id, usuarioId) {
  return await data.desactivarCarrito(id, usuarioId);
}

module.exports = { getCarritoByPk, getCarritoActivo, desactivarCarrito }
