const model = require("../models/workouts");
const { isValidObjectId } = require("../utils/mongoose");

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

// get all workouts
const getAll = async (req, res) => {
  try {
    const workouts = await model.find().sort({ createdAt: -1 });

    return res.status(200).json({ message: "ok", data: workouts });
  } catch (error) {
    console.error;
  }
};

// get workout by id
const getById = async (req, res) => {
  const params = req.params;

  if (!isValidObjectId(params.id)) {
    return res.status(400).json({ message: "not valid id" });
  }

  try {
    const workout = await model.findById(params.id);

    if (!workout) {
      return res.status(404).json({ message: "not found" });
    }

    return res.status(200).json({ message: "ok", data: workout });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// delete workout by id
const deleteById = async (req, res) => {
  const params = req.params;

  if (!isValidObjectId(params.id)) {
    return res.status(400).json({ message: "not valid id" });
  }

  try {
    const result = await model.findOneAndDelete({ _id: params.id });
    if (!result) {
      return res.status(404).json({ message: "not found" });
    }

    return res.status(200).json({
      message: "ok",
      data: {
        _id: result._id,
        isDeleted: result.$isDeleted(),
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
};
