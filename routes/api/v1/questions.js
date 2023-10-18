const express = require("express");

const Router = express.Router();

const questionController = require("../../../controller/question_controller");

// CONTROLLERS AND ACTIONS

// FOR CREATING A QUESTION
Router.post("/create", questionController.create);

// FOR VIEWING A QUESTION USING IT'S ID
Router.get("/view/:id", questionController.showQuestion);

// FOR DELETING A QUESTION USING IT'S ID
Router.delete("/delete/:id", questionController.delete);

// FOR ROUTING TO api/v1/question/options
Router.use("/options", require("./options"));

module.exports = Router;
