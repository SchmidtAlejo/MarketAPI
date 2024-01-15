const modelo = require("./../../models").ProductosDeseados;
const modeloProductos = require("./../../models").Productos;

async function addProductoDeseado(body){
    return await modelo.create(body);
}

async function getAllProductosDeseados(usuarioId){
    return await modelo.findAll({
        where: {
            usuarioId: usuarioId
        },
        include: modeloProductos
    });
}

async function getProductoDeseadoByPk(id){
    return await modelo.findByPk(id);
}

async function deleteProductoDeseado(id) {
    return await modelo.destroy({ where: { id: id } });
}

module.exports={ addProductoDeseado, getAllProductosDeseados, deleteProductoDeseado, getProductoDeseadoByPk};