const modeloCategoria = require("./../../models").Categorias;

async function addCategoria(body) {
  return await modeloCategoria.create(body);
}

async function getCategorias() {
  return { categorias: await modeloCategoria.findAll() };
}

async function getCategoriaByPk(id) {
  return await modeloCategoria.findByPk(id);
}

async function updateCategoria(body) {
  return await modeloCategoria.update(
    { nombre: body.nombre },
    { where: { id: body.id } }
  );
}

async function deleteCategoria(id) {
  return await modeloCategoria.destroy({ where: { id: id } });
}

module.exports = {
  addCategoria,
  getCategorias,
  updateCategoria,
  deleteCategoria,
  getCategoriaByPk
};
