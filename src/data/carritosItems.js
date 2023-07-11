const { getCarritoActivo } = require("./carritos");

const modeloCarritosItems = require("./../../models").CarritosItems;

async function addCarritosItems(body, usuarioId){
    const carrito= await getCarritoActivo(usuarioId);
    return await modeloCarritosItems.create({...body, carritoId: carrito.id});
}

async function getCarritoItemByPk(id){
    return await modeloCarritosItems.findByPk(id)
}

async function getCarritosItems(carritoId){
    return await modeloCarritosItems.findAll({where: {carritoId: carritoId}})
}

async function updateCarritoItem(id, body){
    return await modeloCarritosItems.update({body, where: {id: id}})
}

async function deleteCarritosItems(id){
    return await modeloCarritosItems.destroy({where: {id: id}})
}

module.exports= {addCarritosItems, getCarritoItemByPk, getCarritosItems, updateCarritoItem, deleteCarritosItems}