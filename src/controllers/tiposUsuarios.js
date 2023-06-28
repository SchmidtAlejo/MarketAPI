const data = require('./../data/tiposUsuarios')

async function addTipoUsuairos(){
    return data.addTipoUsuairos();
}

module.exports= {addTipoUsuairos};