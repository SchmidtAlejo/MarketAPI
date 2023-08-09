const data = require("./../data/users");
const dataCarritos = require("./../data/carritos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function addUser(user) {
  user.contrasenia = await bcrypt.hash(user.contrasenia, 8);
  user.tipoUsuariosId = 'cli';
  const newUser= await data.addUser(user);
  const carrito= await dataCarritos.addCarrito({usuarioId: newUser.id, activo: true});
  return {newUser, carrito};
}

async function getUsers() {
  return data.getUsers();
}

async function getUserById(id) {
  const user= await data.getUserById(id);
  user.contrasenia= null;
  return user;
}

async function login(email, contrasenia) {
  const user = await data.findByCredentials(email, contrasenia);
  const token = jwt.sign({ id: user.id }, process.env.CLAVETOKEN, {
    expiresIn: "2h",
  });
  const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
  if (!user || !isMatch) {
    throw new Error("Credenciales no validas");
  }
  return { user, token };
}

async function updateUser(id, body) {
  return data.updateUser(id, body);
}

async function updateUserPassword(id, newPassword) {
  const passwordHash = await bcrypt.hash(newPassword, 8);
  return data.updateUserPassword(id, passwordHash);
}

async function deleteUserById(id) {
  return data.deleteUserById(id);
}

module.exports = { addUser, getUsers, getUserById, login, updateUser, updateUserPassword, deleteUserById };
