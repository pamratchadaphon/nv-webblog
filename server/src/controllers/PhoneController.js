const { Phone } = require("../models");
module.exports = {
  async index(req, res) {
    try {
      const phone = await Phone.findAll();
      res.send(phone);
    } catch (err) {
      res.status(500).send({
        error: "The phones information was incorrect",
      });
    }
  },
  async create(req, res) {
    try {
      const phone = await Phone.create(req.body);
      res.send(phone.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create phone incorrect",
      });
    }
  },
  async put(req, res) {
    try {
      await Phone.update(req.body, {
        where: {
          id: req.params.phoneId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update phone incorrect",
      });
    }
  },
  async remove(req, res) {
    try {
      const phone = await Phone.findOne({
        where: {
          id: req.params.phoneId,
        },
      });
      if (!phone) {
        return res.status(403).send({
          error: "The user information was incorrect",
        });
      }
      await phone.destroy();
      res.send(phone);
    } catch (err) {
      res.status(500).send({
        error: "The user information was incorrect",
      });
    }
  },
  async show(req, res) {
    try {
      const phone = await Phone.findByPk(req.params.phoneId);
      res.send(phone);
    } catch (err) {
      res.status(500).send({
        error: "The phone information was incorrect",
      });
    }
  },
};
