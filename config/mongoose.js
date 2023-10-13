const { on } = require("events");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/polling_api");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to the database"));

db.once("open", () => {
  console.log("Successfully connected to the Database 📀");
});

module.exports = mongoose;
