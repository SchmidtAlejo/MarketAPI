const modeloDirecciones = require("./../../models").Direcciones;

async function addDireccion(body) {
    return await modeloDirecciones.create(body);
}

async function getDirecciones(usuarioId) {
    return {direcciones: await modeloDirecciones.findAll({ where: { usuarioId: usuarioId } })};
}

async function getDireccion(id) {
    return await modeloDirecciones.findByPk(id);
}

async function updateDirecciones(body) {
    return await modeloDirecciones.update({
        provincia: body.provincia,
        ciudad: body.ciudad,
        calle: body.calle,
        numero: body.numero,
        codigoPostal: body.codigoPostal,
        piso: body.piso
    }, { where: { id: body.id } });
}

async function deleteDirecciones(id) {
    return await modeloDirecciones.destroy({ where: { id: id } });
}

module.exports = { addDireccion, getDireccion, updateDirecciones, deleteDirecciones, getDirecciones };