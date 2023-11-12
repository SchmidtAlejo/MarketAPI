var express = require("express");
var router = express.Router();
const { decodeToken } = require("../../middleware/TokenMiddleware");
const controller = require("./../controllers/carritos");
const response = require('../response/response');


router.post("/stock", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.veriifcarStock(req.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/:id", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.getCarritoByPk(req.params.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

router.get("/", decodeToken, async function (req, res) {
  try {
    response.success(res, await controller.getCarritoActivo(req.id), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

module.exports = router;
