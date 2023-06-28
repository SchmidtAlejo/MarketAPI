var express = require("express");
var router = express.Router();
const controller = require("./../controllers/categorias");

router.post("/", async function (req, res) {
  try {
    res.json(await controller.addCategoria(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", async function (req, res) {
  try {
    res.json(await controller.getCategorias());
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.put("/", async function (req, res) {
  try {
    res.json(await controller.updateCategoria(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.delete("/", async function (req, res) {
  try {
    res.json(await controller.deleteCategoria(req.body.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
