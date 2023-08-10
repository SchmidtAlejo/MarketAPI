const modeloCompras = require("./../../models").Compras;
const modeloCarritos = require("./../../models").Carritos;
const modeloCarritosItems = require("./../../models").CarritosItems;
const modeloProductos = require("./../../models").Productos;

async function addCompra(body) {
    return await modeloCompras.create(body);
}

async function getCompraByPk(id) {
    return await modeloCompras.findOne({
        where: {id: id},
        include: [{ model: modeloCarritos, include: [{model: modeloCarritosItems, include: modeloProductos}] }],
    });
}

async function getCompras(usuarioId) {
    return {
        compras: await modeloCompras.findAll({
            where: { usuarioId: usuarioId },
            include: [{ model: modeloCarritos, include: modeloCarritosItems }],
            order: [["createdAt", 'DESC']],
        })
    };
}

module.exports = { addCompra, getCompraByPk, getCompras };