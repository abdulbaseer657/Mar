const express = require("express");
const createError = require("http-errors");
const axios = require("axios");
const mongoose = require("mongoose");
const Jobs = require("../Models/jobs.model");

// Creating an instance of axios for OpenAI API requests
const client = axios.create({
  headers: {
    Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  },
});

// OpenAI API URL for generating embeddings
const url = "https://api.openai.com/v1/embeddings";

/**
 * Generate OpenAI embeddings for a given text.
 *
 * @param {string} text - The text for which embeddings are to be generated.
 * @returns {Promise<Array>} - An array containing OpenAI embeddings.
 */
async function queryEmbedding(text) {
  try {
    const params = {
      input: text,
      model: "text-embedding-3-large",
      dimensions: 1024,
      encoding_format: "float",
    };

    // Send a POST request to OpenAI API to get embeddings
    const response = await client.post(url, params);

    // Check if the response is valid, and return the embeddings
    if (!response) throw createError.Conflict("Error in generating embeddings");

    return response.data.data[0].embedding;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Find similar jobs based on the similarity of OpenAI embeddings with the provided text.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const resumeSimilarity = async (req, res) => {
  try {
    // Generate embeddings for the provided text
    let result = await queryEmbedding(req.body.text);
    console.log(result);

    // Use aggregation to find similar jobs based on embeddings
    const similarJobs = await Jobs.aggregate([
      {
        $vectorSearch: {
          index: "openai",
          path: "job_embedding",
          queryVector: result,
          numCandidates: 100,
          limit: 30,
        },
      },
      { $project: { job_embedding: 0, score: { $meta: "searchScore" } } },
    ]);

    // Send the list of similar jobs as a response
    res.send({ similarJobs });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  resumeSimilarity,
};
