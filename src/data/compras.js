const modeloCompras = require("./../../models").Compras;

async function addCompra(body){
    return await modeloCompras.create(body);
}

async function getCompraByPk(id){
    return await modeloCompras.findByPk(id);
}

async function getCompras(usuarioId){
    return {compras: await modeloCompras.findAll({where: {usuarioId: usuarioId}})};
}

module.exports= {addCompra, getCompraByPk, getCompras};