require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutsRouter = require("./routes/workouts");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/workouts", workoutsRouter);

mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.MONGO_DB_NAME })
  .then(() => {
    app.listen(PORT, () => console.log(`running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
