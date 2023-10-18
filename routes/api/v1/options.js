const express = require("express");

const Router = express.Router();

const optionController = require("../../../controller/option_controller");

// CONTROLLERS AND ACTIONS

// FOR CREATING OPTION USING QUESTION ID
Router.post("/:id/create", optionController.create);

// FOR ADDING A VOTE TO A OPTION USING OPTION ID
Router.get("/:id/add_vote", optionController.addVote);

// FOR DELETING A OPTION USING OPTION ID
Router.delete("/delete/:id", optionController.delete);

module.exports = Router;
