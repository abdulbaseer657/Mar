const mongoose = require("mongoose");
const axios = require("axios");
const Schema = mongoose.Schema;

const userschema = new Schema({
  username: {
    type: String,
    required: [true, "jusername must be provided"],
  },
  password: {
    type: String,
    required: [true, " password must be provided"],
  },
  access: {
    type: String,
  },
});

const User = mongoose.model("userschema", userschema);

module.exports = User;
