var express = require("express");
var router = express.Router();
const { decodeToken } = require("../../middleware/TokenMiddleware");
const controller = require("./../controllers/carritos");

router.get("/:id", decodeToken, async function (req, res) {
  try {
    res.json(await controller.getCarritoByPk(req.params.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get("/", decodeToken, async function (req, res) {
  try {
    res.json(await controller.getCarritoActivo(req.id));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
