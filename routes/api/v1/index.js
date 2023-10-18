const express = require("express");

const Router = express.Router();

// v1 api index
// ENTRY POINT OF ALL /api/v1/question url
Router.use("/question", require("./questions"));

// ENTRY POINT OF ALL /api/v1/options url
Router.use("/options", require("./options"));

module.exports = Router;
