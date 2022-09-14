function AppRoutes(app) {
  app.get("/", (req, res) => {
    res.send("ok");
  });
}

module.exports = {
  AppRoutes,
};
