const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/AuthController");

//route Login

router.post("/login", AuthController.Login);

//route SignUp

router.post("/SignUp", AuthController.Signup);

// get one user

router.get("/:id", AuthController.ControlGetOneUser);

// get all

router.get("/", AuthController.ControlGetAllUser);

//delete all

router.delete("/", AuthController.ControlDeleteAllUser);

//delete One user

router.delete("/:id", AuthController.ControlDeleteOneUser);

//update one user

router.put("/:id", AuthController.ControlUpdateUser);

module.exports = router;
