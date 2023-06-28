const data = require("./../data/productos");

async function addProducto(body) {
  return data.addProducto(body);
}

async function getProducto() {
  return data.getProducto();
}

async function getProductoById(id) {
  return data.getProductoById(id);
}

async function getProductosPorCategoria(id) {
  return data.getProductosPorCategoria(id);
}

async function updateProducto(body) {
  return data.updateProducto(body);
}

async function deleteProducto(id) {
  return data.deleteProducto(id);
}

module.exports = {
  addProducto,
  getProducto,
  getProductoById,
  getProductosPorCategoria,
  updateProducto,
  deleteProducto,
};
