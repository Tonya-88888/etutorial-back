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
  content: {
    type: String,
    default: "",
  },
  id_Tutorial: {
    type: ObjectId,
  },
});

module.exports = model("Section", schema);
