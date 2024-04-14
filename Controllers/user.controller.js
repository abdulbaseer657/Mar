const express = require("express");
const createError = require("http-errors");
const User = require("../Models/user.model");

const register = async (req, res, next) => {
  try {
    const result = req.body;

    // Create a new job instance using the request body
    const userdata = new User(result);

    // Save the job to the database
    const saveduser = await userdata.save();

    // Send the saved job as a response
    res.send({ saveduser });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If the user exists and the password is valid, grant access
    res.json({ access: user.access });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
};
