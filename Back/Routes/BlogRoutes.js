const express = require("express");
const router = express.Router();
const BlogController = require("../Controllers/BlogController");

//routes Create

router.post("/add", BlogController.ControlCreateBlog);

// route GetallBlogs

router.get("/", BlogController.ControlGetAllBlogs);

//route GetOneBlog

router.get("/:id", BlogController.ControlGetOneBlog);

// route Update

router.put("/:id", BlogController.ControlUpdateBlog);

//route Delete

router.delete("/:id", BlogController.ControlDeleteBlog);

router.delete("/", BlogController.ControlDeleteAllBlog);

//
module.exports = router;
