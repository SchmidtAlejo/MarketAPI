var express = require("express");
var router = express.Router();
const { decodeToken } = require("../../middleware/TokenMiddleware");
const controller = require("./../controllers/carritosItems");


router.post("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.addCarritosItems(req.body, req.id))
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.get("/:id", decodeToken, async function (req, res) {
    try {
        res.json(await controller.getCarritoItemByPk(req.params.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.get("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.getCarritosItems(req.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.put("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.updateCarritoItem(req.body, req.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.delete("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.deleteCarritosItems(req.body.id, req.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
});

module.exports= router;