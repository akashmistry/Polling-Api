const { on } = require("events");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://akashmistryofficial:03260220@cluster0.vf107gu.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to the database"));

db.once("open", () => {
  console.log("Successfully connected to the Database 📀");
});

module.exports = mongoose;
