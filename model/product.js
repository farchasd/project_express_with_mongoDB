const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
