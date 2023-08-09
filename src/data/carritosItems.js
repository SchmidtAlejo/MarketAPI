const { getCarritoActivo } = require("./carritos");

const modeloCarritosItems = require("./../../models").CarritosItems;
const modeloProductos = require("./../../models").Productos;

async function addCarritosItems(body, usuarioId){
    const carrito= await getCarritoActivo(usuarioId);
    return await modeloCarritosItems.create({...body, carritoId: carrito.id});
}

async function getCarritoItemByPk(id){
    return await modeloCarritosItems.findByPk(id)
}

async function getCarritosItems(carritoId){
    return {carritosItems: await modeloCarritosItems.findAll({where: {carritoId: carritoId}, include: modeloProductos})}
}

async function updateCarritoItem(body){
    return await modeloCarritosItems.update(body, {where: {id: body.id}})
}

async function deleteCarritosItems(id){
    return await modeloCarritosItems.destroy({where: {id: id}})
}

module.exports= {addCarritosItems, getCarritoItemByPk, getCarritosItems, updateCarritoItem, deleteCarritosItems}