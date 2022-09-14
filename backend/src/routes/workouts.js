const controller = require("../controllers/workouts");
const express = require("express");
const router = express.Router();

router.route("/").post(controller.create).get(controller.getAll);
router.route("/:id").get(controller.getById);

module.exports = router;
