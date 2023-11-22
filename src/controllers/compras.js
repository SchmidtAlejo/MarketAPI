const data = require('./../data/compras');
const dataCarritos = require("./../data/carritos");
const dataCarritosItems = require("./../data/carritosItems");
const dataProductos = require("./../data/productos");

async function addCompra(body, usuarioId) {
    body.usuarioId = usuarioId
    await verificarStock(usuarioId);
    const compra = await data.addCompra(body);
    await restarStock(usuarioId);
    await dataCarritos.desactivarCarrito(usuarioId)
    await dataCarritos.addCarrito({ usuarioId: usuarioId, activo: true });
    return compra;
}

const verificarStock = async (usuarioId) => {
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const carritosItems = await dataCarritosItems.getCarritosItems(carrito.id)
    if (carritosItems.carritosItems.find(carritoItem => carritoItem.cantidad > carritoItem.Producto.stock)) {
        throw new Error("No hay stock suficiente para concretar la compra");
    }
}

const restarStock = async (usuarioId) => {
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const carritosItems = await dataCarritosItems.getCarritosItems(carrito.id);
    carritosItems.carritosItems.forEach(async carritoItem => {
        await dataProductos.updateProducto(
            {
                id: carritoItem.productoId,
                stock: carritoItem.Producto.stock - carritoItem.cantidad,
                ventas: carritoItem.Producto.ventas + carritoItem.cantidad
            });
    });
    await restaurarStock();
}

const restaurarStock = async () => {
    const productosSinStock = await dataProductos.getProductosSinStock();
    if (productosSinStock.productos.length >= 3) {
        productosSinStock.productos.forEach( async producto => {
            await dataProductos.updateProducto(
                {
                    id: producto.id,
                    stock: 10
                });
        })
    }
}

async function getCompraByPk(id) {
    return await data.getCompraByPk(id);
}

async function getCompras(usuarioId) {
    return await data.getCompras(usuarioId);
}

module.exports = { addCompra, getCompraByPk, getCompras };