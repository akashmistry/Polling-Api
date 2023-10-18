const express = require("express");

const Router = express.Router();

console.log("Router is up!");

// ENTRY POINT OF ALL /api url
Router.use("/api", require("./api/index"));

module.exports = Router;
