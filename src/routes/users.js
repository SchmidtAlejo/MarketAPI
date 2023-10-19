var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");
const { decodeToken } = require("./../../middleware/TokenMiddleware");
const response = require('../response/response')

router.get("/allUsers", async function (req, res) {
  try {
    response.success(res, await controller.getUsers(), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.getUserById(req.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.post("/", async function (req, res) {
  try {
    response.success(res, await controller.addUser(req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.post("/login", async function (req, res) {
  try {
    response.success(res, await controller.login(req.body.email, req.body.contrasenia), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.put("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.updateUser(req.id, req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.put("/password", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.updateUserPassword(req.id, req.body.newPassword), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.delete("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.deleteUserById(req.id), 200);
    res.json(await controller.deleteUserById(req.id));
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

module.exports = router;
