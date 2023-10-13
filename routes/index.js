const express = require("express");

const Router = express.Router();

console.log("Router is up!");

Router.use("/api", require("./api/index"));

module.exports = Router;
