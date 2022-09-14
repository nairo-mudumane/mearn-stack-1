const controller = require("../controllers/workouts");
const express = require("express");
const router = express.Router();

router.route("/").post(controller.create);

module.exports = router;
