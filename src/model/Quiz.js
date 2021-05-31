const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  question: {
    type: String,
    default: "",
  },
  answers: [
    {
      text: String,
      isTrue: Boolean,
    },
  ],
  id_Section: {
    type: ObjectId,
  },
  type: {
    type: Number
  },
});

module.exports = model("Quiz", schema);
