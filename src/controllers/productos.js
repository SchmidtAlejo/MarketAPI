const data = require("./../data/productos");
const { getUserById } = require("./users");

async function addProducto(usuarioId, body) {
  const user = await getUserById(usuarioId);
  body.vendedorId= user.id;
  return await data.addProducto(body);
}

async function getProducto() {
  return await data.getProducto();
}

async function getProductoById(id) {
  return await data.getProductoById(id);
}

// async function getProductoPorVendedor(id) {
//   return await data.getProductoPorVendedor(id);
// }

async function getProductosPorCategoria(id, page, order) {
  return await data.getProductosPorCategoria(id, page, order);
}

async function updateProducto(body) {
  return await data.updateProducto(body);
}

async function deleteProducto(id) {
  return await data.deleteProducto(id);
}

module.exports = {
  addProducto,
  getProducto,
  getProductoById,
  getProductosPorCategoria,
  updateProducto,
  deleteProducto,
};
