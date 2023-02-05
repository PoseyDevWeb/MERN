const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  author: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  date: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
