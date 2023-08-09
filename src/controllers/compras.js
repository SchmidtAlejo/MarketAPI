const data = require('./../data/compras');
const dataCarritos= require("./../data/carritos");

async function addCompra(body, usuarioId){
    body.usuarioId= usuarioId
    const compra= await data.addCompra(body);
    await dataCarritos.desactivarCarrito(usuarioId)
    await dataCarritos.addCarrito({usuarioId: usuarioId, activo: true});
    return compra;
}

async function getCompraByPk(id){
    return await data.getCompraByPk(id);
}

async function getCompras(usuarioId){
    return await data.getCompras(usuarioId);
}

module.exports= {addCompra, getCompraByPk, getCompras};