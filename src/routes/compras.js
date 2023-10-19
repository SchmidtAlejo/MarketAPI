var express = require("express");
var router = express.Router();
const controller = require("../controllers/compras");
const { decodeToken } = require("./../../middleware/TokenMiddleware");
const response = require('../response/response');

router.post("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            addCompra(req.body, req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.get("/:id", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.getCompraByPk(req.params.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.get("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.getCompras(req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

module.exports = router;