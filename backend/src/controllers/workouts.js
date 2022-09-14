const model = require("../models/workouts");

// create new
const create = async (req, res) => {
  const payload = req.body;

  try {
    const result = await model.create(payload);

    return res.status(201).json({
      message: "created",
      data: {
        _id: result.id,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { create };
