const modeloCarritos = require("./../../models").Carritos;

async function addCarrito(body) {
  return await modeloCarritos.create(body);
}

async function getCarritoByPk(id) {
  return await modeloCarritos.findByPk(id);
}

async function getCarritoActivo(usuarioId) {
  return await modeloCarritos.findOne({ where: { usuarioId: usuarioId } });
}

async function desactivarCarrito(id, usuarioId) {
  return await modeloCarritos.update(
    { activo: false },
    { where: { id: id, usuarioId: usuarioId, activo: true } }
  );
}

module.exports = { addCarrito, desactivarCarrito, getCarritoByPk, getCarritoActivo };
