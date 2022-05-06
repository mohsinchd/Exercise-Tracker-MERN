const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
