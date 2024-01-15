var express = require("express");
var router = express.Router();
const controller = require("./../controllers/productosDeseados");
const { decodeToken } = require("./../../middleware/TokenMiddleware");
const response = require('../response/response');

router.post("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.addProductoDeseado(req.id, req.body), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

router.get("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.getAllProductosDeseados(req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

router.delete("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.deleteProductoDeseado(req.body.id, req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

module.exports = router;