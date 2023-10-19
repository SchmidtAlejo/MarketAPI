var express = require("express");
var router = express.Router();
const controller = require("./../controllers/productos");
const { decodeToken } = require("./../../middleware/TokenMiddleware");
const response = require('../response/response');

router.post("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.addProducto(req.id, req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/", async function (req, res) {
  try {
    req.query.categoriaId ?
      response.success(res, await controller.getProductosPorCategoria(req.query.categoriaId, req.query.page, req.query.order), 200) :
      response.success(res, await controller.getProducto(), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

// router.get("/mispublicaciones", decodeToken, async function (req, res) {
//   try {
//     res.json(await controller.getProductoPorVendedor(req.id));
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

router.get("/:id", async function (req, res) {
  try {
    response.success(res, await controller.getProductoById(req.params.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.put("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.updateProducto(req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.delete("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.deleteProducto(req.body.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

module.exports = router;
