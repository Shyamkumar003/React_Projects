const mongoose = require("mongoose"); // Corrected module name
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "user"] }, // Corrected typo in 'required'
});
//role-Admin/User
module.exports = mongoose.model('User', UserSchema); // Corrected module name
