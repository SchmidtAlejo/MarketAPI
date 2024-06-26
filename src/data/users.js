const modeloUsuario = require("./../../models").Usuarios;
const modeloDirecciones = require("./../../models").Direcciones;

async function getUsers() {
  return { users: await modeloUsuario.findAll() };
}

async function getUserById(id) {
  return await modeloUsuario.findOne({where:{id: id}, include: modeloDirecciones});
}

async function addUser(user) {
  if (await modeloUsuario.findOne({ where: { email: user.email } })) {
    throw new Error("El email ingresado ya esta en uso");
  }
  return await modeloUsuario.create(user);
}

async function findByCredentials(email) {
  const user = await modeloUsuario.findOne({ where: { email: email } });
  if (!user) {
    throw new Error("Credenciales no validas");
  }
  return user;
}

async function updateUser(id, body) {
  return await modeloUsuario.update(
    {
      nombre: body.nombre,
      apellido: body.apellido,
      nroTelefono: body.nroTelefono,
      dni: body.dni
    },
    { where: { id: id } }
  );
}

async function updateUserPassword(id, newPassword) {
  return await modeloUsuario.update(
    { contrasenia: newPassword },
    { where: { id: id } }
  );
}

async function deleteUserById(id) {
  return await modeloUsuario.destroy(
    { where: { id: id } }
  );
}

module.exports = { getUsers, getUserById, addUser, findByCredentials, updateUser, updateUserPassword, deleteUserById };
