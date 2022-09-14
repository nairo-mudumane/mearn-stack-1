const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ ok: "ok" }));
router.get("/:id", (req, res) => {
  return res.json({ id: req.params.id });
});

module.exports = router;
