const express = require("express");
const { register, login } = require("../controllers/users");

const router = express.Router();

router.post("/register", async (req, res) => {
  await register(req, res);
});

router.post("/login", async (req, res) => {
  await login(req, res);
});

module.exports = router;
