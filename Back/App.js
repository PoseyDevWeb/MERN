const express = require("express");
const bodyParser = require("body-parser");
const BlogRoutes = require("./Routes/BlogRoutes");
const UserRoutes = require("./Routes/AuthRoutes");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/Api/Blog", BlogRoutes);
app.use("/user", UserRoutes);

module.exports = app;
