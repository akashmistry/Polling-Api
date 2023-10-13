const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "option",
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
