const data = require('../data/productosDeseados');

async function addProductoDeseado(usuarioId, body){
    body.usuarioId= usuarioId;
    return await data.addProductoDeseado(body);
}

async function getAllProductosDeseados(usuarioId){
    return await data.getAllProductosDeseados(usuarioId);
}

async function deleteProductoDeseado(id, usuarioId) {
    console.log(usuarioId);
    const response = await data.getProductoDeseadoByPk(id);
    if(response.usuarioId !==usuarioId){
        throw new Error('Acceso denegado')
    }
    return await data.deleteProductoDeseado(id);
}

module.exports= {addProductoDeseado, getAllProductosDeseados, deleteProductoDeseado}