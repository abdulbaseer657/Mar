const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  field: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  skills: {
    type: String, // Assuming skills are represented as a string
    required: true,
  },
  applicants: [
    {
      username: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
  ],
});

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;
