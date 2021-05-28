//const genericUser = require("./generic.controller");
const boom = require("boom");
const bcrypt = require("bcryptjs");

const { Qwiz } = require("../model");

const genericTutorial = (model) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.find({ id_Section: id });
      return res.status(200).send(item);
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
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
      return res.status(200).send({ status: "OK", message: "Вопрос удален" });
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
});

module.exports = genericTutorial(Qwiz);
