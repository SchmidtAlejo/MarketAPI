const modeloTiposUsuarios = require("./../../models").TiposUsuarios;

async function addTipoUsuairos() {
  const cliente = await modeloTiposUsuarios.findOrCreate({
    where: { id: "cli" },
    defaults: { usuario: "cliente" },
  });

  const empleado = await modeloTiposUsuarios.findOrCreate({
    where: { id: "emp" },

    defaults: {
      usuario: "empleado",
    },
  });

  const admin = await modeloTiposUsuarios.findOrCreate({
    where: { id: "adm" },

    defaults: {
      usuario: "administrador",
    },
  });

  return [cliente, empleado, admin];
}

module.exports = { addTipoUsuairos };
