var express = require("express");
var router = express.Router();
const controller = require("../controllers/tiposUsuarios");

router.post("/", async function (req, res) {
  try {
    res.json(await controller.addTipoUsuairos());
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
