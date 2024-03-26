const mongoose = require("mongoose");
const axios = require("axios");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  _id: Schema.Types.ObjectId,
  job_title: {
    type: String,
    required: [true, "job title must be provided"],
  },
  company: {
    type: String,
    required: [true, "company name must be provided"],
  },
  experiance: {
    type: Number,
    default: 0,
  },
  skills: {
    type: [String],
  },
  location: {
    type: String,
  },
  company_logo: {
    type: String,
  },
  applications: {
    type: Number,
  },
  compensation: {
    type: String,
  },
  job_url: {
    type: String,
    required: [true, "job URL must be provided"],
  },
  job_posted: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: [true, "job description must be provided"],
  },
  job_embedding: {
    type: [Number],
    default: [],
  },
});

// Generating OpenAi Embeddings for Job Description
const client = axios.create({
  headers: {
    Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  },
});
const url = "https://api.openai.com/v1/embeddings";

jobSchema.pre("save", async function (next) {
  if (this.isModified("description")) {
    // Only generate embeddings if the description has changed
    try {
      const params = {
        input: this.description,
        model: "text-embedding-ada-002",
      };
      const response = await client.post(url, params);
      const embed = response.data.data[0].embedding;
      this.job_embedding = embed;
      next();
    } catch (error) {
      console.error("Error generating embeddings:", error);
      next(error);
    }
  } else {
    next();
  }
});

const Jobs = mongoose.model("jobdetails", jobSchema);

module.exports = Jobs;
