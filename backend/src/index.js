require("dotenv").config();
const express = require("express");
const { AppRoutes } = require("./routes/index");
const app = express();
const PORT = process.env.PORT;

AppRoutes(app);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
