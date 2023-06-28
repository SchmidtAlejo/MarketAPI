const data = require("./../data/categorias");

async function addCategoria(body) {
  return data.addCategoria(body);
}

async function getCategorias() {
  return data.getCategorias();
}

async function updateCategoria(body) {
  return data.updateCategoria(body);
}

async function deleteCategoria(id) {
  return data.deleteCategoria(id);
}

module.exports = { addCategoria, getCategorias, updateCategoria, deleteCategoria };
