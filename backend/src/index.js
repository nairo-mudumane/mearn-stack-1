require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutsRouter = require("./routes/works");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/workouts", workoutsRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
