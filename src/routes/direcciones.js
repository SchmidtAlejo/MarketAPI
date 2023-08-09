var express = require("express");
var router = express.Router();
const controller = require("../controllers/direcciones");
const { decodeToken } = require("./../../middleware/TokenMiddleware");

router.get("/:id", decodeToken, async function(req, res){
    try {
        res.json(await controller.getDireccion(req.params.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.get("/", decodeToken, async function(req, res){
    try {
        res.json(await controller.getDirecciones(req.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.post("/", decodeToken, async function (req, res) {
    try {
        res.json(await controller.addDireccion(req.id, req.body));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.put("/", decodeToken, async function(req, res){
    try {
        res.json(await controller.updateDirecciones(req.body));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

router.delete("/", decodeToken, async function(req, res){
    try {
        res.json(await controller.deleteDirecciones(req.body.id));
    } catch (error) {
        res.status(401).send(error.message);
    }
})

module.exports= router;