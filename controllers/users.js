const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../constants");

const db = require("../models");

const User = db.User;

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: 86400,
  });
};

exports.register = async (req, res) => {
  try {
    const data = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    if (data.id) {
      res.status(200).send({
        token: generateToken(data),
      });
    }
  } catch (error) {
    if (error.parent.detail) {
      res.status(400).send("Username already exists!");
    } else {
      res.status(400).send("Something is wrong!");
    }
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user.id) {
      res.status(400).send("Invalid credentials");
      return;
    }

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      res.status(400).send("Wron Password");
      return;
    }

    res.status(200).send({
      token: generateToken(user),
    });
  } catch (error) {
    console.log(`error`, error);
    res.status(400).send("Something is wrong!");
  }
};
