const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    // task: []
    name: {
        type: String,
        required: true
      },
      age: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      }
})

const TaskModel = mongoose.model("task",TodoSchema)
module.exports = TaskModel