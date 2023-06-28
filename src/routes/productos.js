var express = require("express");
var router = express.Router();
const controller = require("./../controllers/productos");

router.post("/", async function (req, res) {
  try {
    res.json(await controller.addProducto(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", async function (req, res) {
  try {
    req.query.categoriaId?
    res.json(await controller.getProductosPorCategoria(req.query.categoriaId)):
    res.json(await controller.getProducto());
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", async function (req, res) {
  try {
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/:id", async function (req, res) {
  try {
    res.json(await controller.getProductoById(req.params.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.put("/", async function (req, res) {
  try {
    res.json(await controller.updateProducto(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.delete("/", async function (req, res) {
  try {
    res.json(await controller.deleteProducto(req.body.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
