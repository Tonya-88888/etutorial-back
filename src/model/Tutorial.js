const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
   name: {
    type: String,
    default: "",
  },
  sections: {
    type: [ObjectId],
    default: "",
  },
});

module.exports = model("Tutorial", schema);
