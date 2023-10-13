const express = require("express");

const Router = express.Router();

const questionController = require("../../../controller/question_controller");

Router.post("/create", questionController.create);

Router.get("/view/:id", questionController.showQuestion);

Router.delete("/delete/:id", questionController.delete);

Router.use("/options", require("./options"));

module.exports = Router;
