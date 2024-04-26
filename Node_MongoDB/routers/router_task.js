const express = require("express");
const {
  createTask,
  getAllTasks,
  getCompletedTask,
} = require("../controllers/taskcontroller");
const task_routes = express.Router();

task_routes.post("/", createTask);
task_routes.get("/", getAllTasks);
task_routes.get("/completed", getCompletedTask);

module.exports = task_routes;
