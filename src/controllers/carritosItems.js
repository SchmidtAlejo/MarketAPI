const data = require("./../data/carritosItems");
const dataCarritos= require("./../data/carritos");

async function addCarritosItems(body, usuarioId){
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const subtotal = carrito.subtotal + body.subtotal;
    await dataCarritos.actualizarSubtotal(subtotal, usuarioId)
    return await data.addCarritosItems(body, usuarioId);
}

async function getCarritoItemByPk(id){
    return await data.getCarritoItemByPk(id);
}

async function getCarritosItems(usuarioId){
    const carrito= await dataCarritos.getCarritoActivo(usuarioId);
    return await data.getCarritosItems(carrito.id);
}

async function updateCarritoItem(body, usuarioId){
    const carritosItem = await data.getCarritoItemByPk(body.id);
    const resto = body.subtotal - carritosItem.subtotal;
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const subtotal = carrito.subtotal + resto;
    console.log(subtotal);
    await dataCarritos.actualizarSubtotal(subtotal, usuarioId);
    return await data.updateCarritoItem(body);
    //return null
}

async function deleteCarritosItems(id, usuarioId){
    const carrito = await dataCarritos.getCarritoActivo(usuarioId);
    const carritosItem= await data.getCarritoItemByPk(id);
    const subtotal = carrito.subtotal - carritosItem.subtotal;
    await dataCarritos.actualizarSubtotal(subtotal, usuarioId);
    return await data.deleteCarritosItems(id);
}

module.exports= {addCarritosItems, getCarritoItemByPk, getCarritosItems, updateCarritoItem, deleteCarritosItems}