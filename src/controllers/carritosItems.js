const data = require("./../data/carritosItems");
const dataCarritos = require("./../data/carritos");
const dataProductos = require("./../data/productos");

async function addCarritosItems(body, usuarioId) {
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const carritoItemAux = carrito.CarritosItems.find(carritoItem => carritoItem.productoId === body.productoId);
    if (carritoItemAux) {
        const cantidad = Number.parseInt(carritoItemAux.cantidad) + Number.parseInt(body.cantidad);
        const update = {
            id: carritoItemAux.id,
            cantidad: cantidad,
            subtotal: cantidad * body.valorUnitario
        }
        await verificarCantidad(carritoItemAux.productoId, cantidad);
        return await updateCarritoItem(update, usuarioId);
    }
    else {
        await verificarCantidad(body.productoId, body.cantidad);
        const subtotal = carrito.subtotal + body.subtotal;
        await dataCarritos.actualizarSubtotal(subtotal, usuarioId)
        return await data.addCarritosItems(body, usuarioId);
    }
}

const verificarCantidad = async (productoId, cantidad) => {
    const producto = await dataProductos.getProductoById(productoId);
    if (cantidad > producto.stock) {
        throw new Error("No hay stock suficiente")
    }
}

async function getCarritoItemByPk(id) {
    return await data.getCarritoItemByPk(id);
}

async function getCarritosItems(usuarioId) {
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    return await data.getCarritosItems(carrito.id);
}

async function updateCarritoItem(body, usuarioId) {
    const carritosItem = await data.getCarritoItemByPk(body.id);
    await verificarCantidad(carritosItem.productoId, body.cantidad);
    const resto = body.subtotal - carritosItem.subtotal;
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const subtotal = carrito.subtotal + resto;
    await dataCarritos.actualizarSubtotal(subtotal, usuarioId);
    return await data.updateCarritoItem(body);
}

async function deleteCarritosItems(id, usuarioId) {
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const carritosItem = await data.getCarritoItemByPk(id);
    const subtotal = carrito.subtotal - carritosItem.subtotal;
    await dataCarritos.actualizarSubtotal(subtotal, usuarioId);
    return await data.deleteCarritosItems(id);
}

module.exports = { addCarritosItems, getCarritoItemByPk, getCarritosItems, updateCarritoItem, deleteCarritosItems }