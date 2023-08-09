const data = require("./../data/carritos");

async function getCarritoByPk(id) {
  return await data.getCarritoByPk(id);
}

async function getCarritoActivo(usuarioId) {
  return await data.getCarritoActivo(usuarioId);
}

module.exports = { getCarritoByPk, getCarritoActivo }
