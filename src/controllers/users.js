const data = require("./../data/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function addUser(user) {
  user.contrasenia = await bcrypt.hash(user.contrasenia, 8);
  return await data.addUser(user);
}

async function getUsers() {
  return data.getUsers();
}

async function getUserById(id) {
  return await data.getUserById(id);
}

async function login(email, password) {
  const user = await data.findByCredentials(email, password);
  const token = jwt.sign({ id: user.id }, process.env.CLAVETOKEN, {
    expiresIn: "2h",
  });
  const isMatch = await bcrypt.compare(password, user.contrasenia);
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
