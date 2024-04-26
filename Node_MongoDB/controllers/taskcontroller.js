const Task = require("../models/task");

const createTask = async (req, res) => {
  console.log(Task);
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCompletedTask = async (req, res) => {
  try {
    const completedTasks = await Task.find({ completed: true });
    res.status(200).json(completedTasks);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
module.exports = { createTask, getAllTasks, getCompletedTask };
