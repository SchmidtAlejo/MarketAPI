var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");
const { decodeToken } = require("./../../middleware/TokenMiddleware");

router.get("/allUsers", async function (req, res) {
  try {
    res.json(await controller.getUsers());
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", decodeToken, async function (req, res) {
  try {
    res.json(await controller.getUserById(req.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.post("/", async function (req, res) {
  try {
    res.json(await controller.addUser(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.post("/login", async function (req, res){
  try {
    res.json(await controller.login(req.body.email, req.body.password));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.put("/", decodeToken, async function(req, res){
  try {
    res.json(await controller.updateUser(req.id, req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.put("/password", decodeToken, async function(req, res){
  try {
    res.json(await controller.updateUserPassword(req.id, req.body.newPassword));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.delete("/", decodeToken, async function(req, res){
  try {
    res.json(await controller.deleteUserById(req.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
