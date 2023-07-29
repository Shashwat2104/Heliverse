// Import necessary modules
const { Schema, model } = require("mongoose");

// Define the user schema
const userSchema = Schema(
  {
    first_name: { type: String, require: true },

    last_name: { type: String, require: true },

    email: { type: String, require: true, unique: true },

    gender: { type: String, require: true },

    avatar: { type: String, require: true },

    domain: { type: String, require: true },

    available: { type: Boolean, require: true },
  },
  { versionKey: false }
);

const userModel = model("Heliverse", userSchema);

module.exports = { userModel };
