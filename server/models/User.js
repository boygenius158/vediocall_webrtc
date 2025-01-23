const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Create and export the User Model
module.exports = mongoose.model('User', userSchema);
