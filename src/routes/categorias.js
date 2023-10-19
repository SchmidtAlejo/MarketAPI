var express = require("express");
var router = express.Router();
const controller = require("./../controllers/categorias");
const response = require('../response/response');

router.post("/", async function (req, res) {
  try {
    response.success(res, await controller.addCategoria(req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/", async function (req, res) {
  try {
    response.success(res, await controller.getCategorias(), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/:id", async function (req, res) {
  try {
    response.success(res, await controller.getCategoriaByPk(req.params.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.put("/", async function (req, res) {
  try {
    response.success(res, await controller.updateCategoria(req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.delete("/", async function (req, res) {
  try {
    response.success(res, await controller.deleteCategoria(req.body.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

module.exports = router;
