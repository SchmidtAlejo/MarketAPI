const modeloProductos = require("./../../models").Productos;

async function addProducto(body) {
  return await modeloProductos.create(body);
}

async function getProducto() {
  return { productos: await modeloProductos.findAll() };
}

async function getProductoById(id) {
  return await modeloProductos.findByPk(id);
}

async function getProductosPorCategoria(id) {
  return {productos: await modeloProductos.findAll({ where: { categoriaId: id } })};
}

async function updateProducto(body) {
  return await modeloProductos.update(
    {
      nombre: body.nombre,
      descripciones: body.descripciones,
      precio: body.precio,
      activo: body.activo,
      stock: body.stock,
      imagen: body.imagen,
      categoriaId: body.categoriaId,
    },
    { where: { id: body.id } }
  );
}

async function deleteProducto(id) {
  return await modeloProductos.destroy({ where: { id: id } });
}

module.exports = {
  addProducto,
  getProducto,
  getProductosPorCategoria,
  updateProducto,
  deleteProducto,
  getProductoById,
};
