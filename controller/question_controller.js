const Question = require("../models/question");
const Option = require("../models/option");

// ACTION TO CREATE A QUESTION
module.exports.create = async (req, res) => {
  try {
    const ques = await Question.create(req.body);
    return res.status(200).json({
      message: "Successfully question created!",
      data: ques,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in creating Question!",
    });
  }
};

// ACTION TO VIEW A QUESTION
module.exports.showQuestion = async (req, res) => {
  try {
    const ques = await Question.findById(req.params.id).populate("options");
    if (ques) {
      return res.status(200).json({
        message: "Successfully Fetched question from Databse",
        data: ques,
      });
    } else {
      return res.status(200).json({
        message: "Question does not exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Unable to fetch question from Database",
    });
  }
};

// ACTION TO DELETE A QUESTION
module.exports.delete = async (req, res) => {
  const ques = await Question.findById(req.params.id)
    .clone()
    .catch(function (err) {
      console.log(err);
    });
  if (ques) {
    // DELETING THE QUESTION
    await Question.deleteOne(req.params.id)
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    // DELETING ALL THE OPTIONS OF THE QUESTION
    await Option.deleteMany({ question: req.params.id })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    return res.status(200).json({
      message: "Successfully deleted question ans it's options",
    });
  } else {
    return res.status(200).json({
      message: "Question doesnot exist!",
    });
  }
};
