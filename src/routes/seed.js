var express = require("express");
var router = express.Router();
const controller = require("./../controllers/seed");
const response = require('../response/response');

router.post("/", async function (req, res) {
  try {
    response.success(res, await controller.generateSeed(req.body), 200);
  } catch (error) {
    response.error(res, error.message, 400);
  }
});

module.exports = router;