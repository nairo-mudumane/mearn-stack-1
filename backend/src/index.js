require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const workoutsRouter = require("./routes/works");

app.use(express.json());
app.use("/workouts", workoutsRouter);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
