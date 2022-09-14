require("dotenv").config();
const express = require("express");
const router = require("./routes/works");
const app = express();
const PORT = process.env.PORT;

app.use("/api/", router);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
