var express = require("express");
var router = express.Router();
const { decodeToken } = require("../../middleware/TokenMiddleware");
const controller = require("./../controllers/carritosItems");
const response = require('../response/response');


router.post("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            addCarritosItems(req.body, req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
})

router.get("/:id", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            getCarritoItemByPk(req.params.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

router.get("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            getCarritosItems(req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

router.put("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            updateCarritoItem(req.body, req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

router.delete("/", decodeToken, async function (req, res) {
    try {
        response.success(res, await controller.
            deleteCarritosItems(req.body.id, req.id), 200);
    } catch (error) {
        response.error(res, error.message, 400);
    }
});

module.exports = router;