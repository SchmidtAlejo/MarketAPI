var express = require("express");
var router = express.Router();
const controller = require("../controllers/direcciones");
const { decodeToken } = require("./../../middleware/TokenMiddleware");
const response = require('../response/response');

router.get("/:id", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.getDireccion(req.params.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.get("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.getDirecciones(req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.post("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.addDireccion(req.id, req.body), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.put("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.updateDirecciones(req.body), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.delete("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.deleteDirecciones(req.body.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

module.exports = router;