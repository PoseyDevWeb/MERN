const { mongo, default: mongoose } = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", AuthSchema);

module.exports = User;
