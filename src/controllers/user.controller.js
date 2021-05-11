//const genericUser = require("./generic.controller");
const boom = require("boom");
const bcrypt= require("bcryptjs");

const { User } = require("../model");

// module.exports = {
//   ...genericUser(User),
// };

const genericUser = (model) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id);
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
      const em = body.email;
      const email = await model.find({ email: em });

      if (email.length != 0) {
        return res
          .status(200)
          .send({
            message: "Пользователь с данным электронным адресом уже существует",
          });
      } else {
        const item = new model(body);
        const newItem = await item.save();
        return res.status(200).send(newItem);
      }
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
  async update({ params: { id }, body }, res) {
    // title: Control
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
      return res
        .status(200)
        .send({ status: "OK", message: "Пользователь удален" });
    } catch (err) {
      return res.status(400).send(boom.boomify(err));
    }
  },
});

module.exports = genericUser(User);


// module.exports = authController;
