var express = require("express");
var router = express.Router();
const controller = require("../controllers/compras");
const { decodeToken } = require("./../../middleware/TokenMiddleware");

router.post("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.addCompra());
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.get("/:id", decodeToken, async function(req, res){
    try {
        res.json(await controller.getCompraByPk(req.params.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.get("/", decodeToken, async function(req, res){
    try {
        res.json(await controller.getCompras(req.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
})