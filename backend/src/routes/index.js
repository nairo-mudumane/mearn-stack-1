const { NotFound } = require("./notFound");
const { Works } = require("./works");

function AppRoutes(app) {
  Works(app);
  NotFound(app);
}

module.exports = {
  AppRoutes,
};
