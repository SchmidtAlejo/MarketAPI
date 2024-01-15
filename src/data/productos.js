const modeloProductos = require("./../../models").Productos;
const modeloProductosDeseados = require("./../../models").ProductosDeseados;
const modeloCategorias = require("./../../models").Categorias;

async function addProducto(body) {
  return await modeloProductos.create(body);
}

async function getProducto() {
  return { productos: await modeloProductos.findAll() };
}

async function getProductosSinStock() {
  return {
    productos: await modeloProductos.findAll({
      where: { stock: 0 }
    })
  };
}

async function getProductoById(id, usuarioId) {
  if(usuarioId){
    const response= await modeloProductos.findOne({
      where: { id: id },
      include: [{ model: modeloCategorias }, { model: modeloProductosDeseados, where: {usuarioId: usuarioId}, required: false}]
    });
    console.log(response);
    return response;
  }

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
  if (body.stock === 0) {
    body.activo = false;
  }
  return await modeloProductos.update(
    body,
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
  getProductosSinStock
};
