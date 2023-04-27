const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    project: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Userdata", UserSchema);
module.exports = User;
