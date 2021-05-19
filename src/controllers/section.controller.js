const boom = require("boom");
const bcrypt = require("bcryptjs");

const { Section, Tutorial } = require("../model");

const genericSection = (model) => ({

  async get({ params: { id } }, res) {
    // "content": "<h2>nen</h2>",

    try {
      const item = await model.find({ id_Tutorial: id });
      return res.status(200).send(item);
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }

    //  const item = await model.find({
    //    _id: {
    //      $in: ["609948e8f018510dacecf206"],
    //    },
    //  });

    // try {
    //   const item = await model.findById(id);
    //   return res.status(200).send(item);
    // } catch (err) {
    //   return res.status(400).send(boom.boomify(err));
    // }
  },
  async getAll(req, res) {
    try {
      const items = await model.find();
      return res.status(200).send(items);
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
  async create({ body }, res) {
    try {
      const item = new model(body);
      const newItem = await item.save();
      return res.status(200).send(newItem);
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
  async update({ params: { id }, body }, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true });
      return res.status(200).send(item);
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({ status: "OK", message: "Параграф удален" });
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
});

module.exports = genericSection(Section);
