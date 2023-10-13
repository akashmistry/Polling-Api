const express = require("express");

const Router = express.Router();

Router.use("/question", require("./questions"));
// Router.use("/option", require("./options"));

module.exports = Router;
