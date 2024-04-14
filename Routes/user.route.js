const express = require("express");
const router = express.Router();

const { register, login } = require("../Controllers/user.controller");

router.route("/user/register").post(register);
router.route("/user/login").post(login);

module.exports = router;
