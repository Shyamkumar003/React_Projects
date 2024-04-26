const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    firstname: String,
    lastname: String,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
  phone_no: {
    type: Number,
  },
});

module.exports = mongoose.model('person', personSchema);
