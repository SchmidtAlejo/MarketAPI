const data = require('../data/direcciones');

async function getDireccion(id){
    return await data.getDireccion(id);
}

async function getDirecciones(usuarioId){
    return await data.getDirecciones(usuarioId);
}

async function addDireccion(usuarioId, body){
    body.usuarioId= usuarioId;
    return await data.addDireccion(body);
}

async function updateDirecciones(body){
    return await data.updateDirecciones(body);
}

async function deleteDirecciones(id){
    return await data.deleteDirecciones(id);
}

module.exports= {getDireccion, addDireccion, updateDirecciones, deleteDirecciones, getDirecciones};