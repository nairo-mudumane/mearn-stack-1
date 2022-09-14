function NotFound(app) {
  app.all("*", (req, res) => {
    res.status(404).json({ message: "not found" });
  });
}

module.exports = {
  NotFound,
};
