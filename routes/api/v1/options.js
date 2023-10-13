const express = require("express");

const Router = express.Router();

const optionController = require("../../../controller/option_controller");

Router.post("/:id/create", optionController.create);

Router.get("/:id/add_vote", optionController.addVote);

Router.delete("/delete/:id", optionController.delete);

module.exports = Router;
