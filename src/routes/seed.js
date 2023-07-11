var express = require("express");
var router = express.Router();
const controller = require("./../controllers/seed");

router.post("/", async function (req, res) {
  try {
    res.json(await controller.generateSeed(req.body));
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;