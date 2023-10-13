const Question = require("../models/question");
const Option = require("../models/option");

module.exports.create = async (req, res) => {
  const option = await Option.create({
    option: req.body.content,
    question: req.params.id,
  });

  const updateOption = await Option.findByIdAndUpdate(option._id, {
    add_vote: `http://localhost:2620/api/v1/options/${option._id}/add_vote`,
  });

  updateOption.save();

  const ques = await Question.findById(req.params.id);

  if (ques) {
    ques.options.push(updateOption);
    ques.save();
    return res.status(200).json({
      message: "Successfullt added option to the question",
    });
  } else {
    return res.status(200).json({
      message: "Question does not exist!",
    });
  }
};

module.exports.addVote = async (req, res) => {
  const option = await Option.findByIdAndUpdate(req.params.id, {
    $inc: { vote: 1 },
  });
  if (option) {
    await option.save();
    return res.status(200).json({
      message: "Vote has been added to the option",
    });
  } else {
    return res.status(200).json({
      message: "Option does not exist",
    });
  }
};

module.exports.delete = async (req, res) => {
  const option = await Option.findById(req.params.id);

  if (option) {
    const questionId = option.question;

    const ques = await Question.findByIdAndUpdate(questionId, {
      $pull: { options: req.params.id },
    });

    await Option.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Option has been deleted from the question",
    });
  } else {
    return res.status(200).json({
      message: "Option does not exist",
    });
  }
};
