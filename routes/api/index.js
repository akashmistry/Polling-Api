const express = require("express");

const Router = express.Router();

// ENTRY POINT OF ALL /api/v1 url
Router.use("/v1", require("./v1/index"));

module.exports = Router;
