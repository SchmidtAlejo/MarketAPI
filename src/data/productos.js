const modeloProductos = require("./../../models").Productos;
const modeloCategorias = require("./../../models").Categorias;

async function addProducto(body) {
  return await modeloProductos.create(body);
}

async function getProducto() {
  return { productos: await modeloProductos.findAll() };
}

async function getProductoById(id) {
  return await modeloProductos.findOne({
    where: { id: id },
    include: modeloCategorias
  });
}

async function getProductosPorCategoria(id, page, order) {
  const LIMIT_PRODUCT_PAGES = 8;
  //order -> ASC, DESC
  const response = {
    productos: await modeloProductos.findAndCountAll({
      where: { categoriaId: id },
      offset: page * LIMIT_PRODUCT_PAGES,
      limit: LIMIT_PRODUCT_PAGES,
      order: [["precio", order]],
    }),
  };
  const pages = Math.ceil(response.productos.count / LIMIT_PRODUCT_PAGES);
  response.productos.pages = pages;
  return response;
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
