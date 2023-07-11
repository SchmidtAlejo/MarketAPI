const data = require("./../data/carritosItems");

async function addCarritosItems(body, usuarioId){
    return await data.addCarritosItems(body, usuarioId);
}

async function getCarritoItemByPk(id){
    return await data.getCarritoItemByPk(id);
}

async function getCarritosItems(carritoId){
    return await data.getCarritosItems(carritoId);
}

async function updateCarritoItem(id, body){
    return await data.updateCarritoItem(id, body);
}

async function deleteCarritosItems(id){
    return await data.deleteCarritosItems(id);
}

module.exports= {addCarritosItems, getCarritoItemByPk, getCarritosItems, updateCarritoItem, deleteCarritosItems}