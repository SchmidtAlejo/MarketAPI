const data = require("./../data/carritos");
const dataProductos = require("./../data/productos");
const controllerCarritosItems = require("./../controllers/carritosItems");

async function getCarritoByPk(id) {
  return await data.getCarritoByPk(id);
}

async function getCarritoActivo(usuarioId) {
  return await data.getCarritoActivo(usuarioId);
}

async function veriifcarStock(usuarioId) {
  const carrito= await data.getCarritoActivo(usuarioId);
  let boolAux = false;
  const promesas = carrito.CarritosItems.map(async carritoItem =>{
    const producto= await dataProductos.getProductoById(carritoItem.productoId);
    if(carritoItem.cantidad > producto.stock){
      boolAux= true
      if(producto.stock>0){
        await controllerCarritosItems.updateCarritoItem({
          id: carritoItem.id,
          cantidad: producto.stock,
          subtotal: producto.stock* carritoItem.valorUnitario
        }, usuarioId);
      }
      else if(producto.stock === 0){
        await controllerCarritosItems.deleteCarritosItems(carritoItem.id, usuarioId);
      }
    }
  });

  await Promise.all(promesas);

  if(boolAux){
    throw new Error('No hay stock suficiente');
  }
}

module.exports = { getCarritoByPk, getCarritoActivo, veriifcarStock }
