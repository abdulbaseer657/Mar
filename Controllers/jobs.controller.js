const express = require("express");
const createError = require("http-errors");
const Jobs = require("../Models/jobs.model");
const { jobsSchema } = require("../Helpers/validation_schema");
/**
 * Create and save a new job.
 * status - Done
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void}
 */
const postJob = async (req, res, next) => {
  try {
    const result = await jobsSchema.validateAsync(req.body);

    if (!result) throw createError.Conflict(`Data Validation failed`);
    // Create a new job instance using the request body
    const job = new Jobs(result);

    // Save the job to the database
    const savedJob = await job.save();

    // Send the saved job as a response
    res.send({ savedJob });
  } catch (error) {
    if (error.isJoi == true)
      return next(createError.BadRequest("validation failed"));
    next(error);
  }
};

/**
 * Get a job by its ID.
 *status- Done
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 * @returns {void}
 */
const getJob = async (req, res, next) => {
  try {
    // Find a job by its ID, excluding the 'openaiEmbeddings' field, and populate the 'company' field
    const job = await Jobs.findOne(
      { _id: req.params },
      { openaiEmbeddings: 0 }
    ).populate("company");

    // If the job is not found, throw a conflict error
    if (!job)
      throw createError.Conflict(
        `Job with _id: ${req.params._id} is unavailable`
      );

    // Send the job as a response
    res.send({ job });
  } catch (error) {
    // Pass the error to the next middleware for centralized error handling
    next(error);
  }
};

/**
 * Get all jobs.
 *status - add filters
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 * @returns {void}
 */
const getAllJobs = async (req, res, next) => {
  try {
    // Start with an empty query object
    let query = {};

    // Add filters to the query object based on query parameters
    if (req.query.job_title) {
      query.job_title = {
        $regex: "\\b" + req.query.job_title + "\\b",
        $options: "i",
      };
    }
    if (req.query.experience) {
      query.experience = { $lte: Number(req.query.experience) }; // Less than or equal to filter
    }
    if (req.query.skills) {
      // Assuming skills are passed as a comma-separated list
      const skillsArray = req.query.skills.split(",");
      query.skills = { $all: skillsArray }; // All skills must match
    }
    if (req.query.location) {
      query.location = { $regex: req.query.location, $options: "i" }; // Case-insensitive search
    }
    if (req.query.company) {
      // Escape regex special characters in the company query
      const escapedCompany = req.query.company.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        "\\$&"
      );
      query.company = { $regex: escapedCompany, $options: "i" };
    }
    if (req.query.days_old) {
      // Calculate the date 'days_old' days ago
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(req.query.days_old));
      query.job_posted = { $gte: daysAgo }; // Jobs posted within the last 'days_old' days
    }
    // Extend with more filters as needed
    let withoutLinkedInQuery = { ...query, job_url: { $not: /linkedin\.com/ } };
    // Find jobs based on the constructed query, excluding the 'job_embedding' field, and populate the 'company' field
    let jobsWithoutLinkedIn = await Jobs.find(withoutLinkedInQuery, {
      job_embedding: 0,
    }).limit(100);

    // jobs with linkedin
    let withLinkedInQuery = { ...query, job_url: /linkedin\.com/ };
    jobsWithLinkedIn = await Jobs.find(withLinkedInQuery, {
      job_embedding: 0,
    }).limit(100);

    let result = [...jobsWithoutLinkedIn, ...jobsWithLinkedIn];
    // Send the results as a response
    res.send({ result });
  } catch (error) {
    // Handle errors gracefully and log them
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

/**
 * Delete a job by its ID.
 *status - Done
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 * @returns {void}
 */
const deleteJob = async (req, res, next) => {
  try {
    // Find and delete a job by its ID
    const job = await Jobs.findOneAndDelete({ _id: req.params });

    // If the job is not found, throw a conflict error
    if (!job)
      throw createError.Conflict(
        `Job with _id: ${req.params._id} is unavailable`
      );

    // Send the deleted job as a response
    res.send({ job });
  } catch (error) {
    // Pass the error to the next middleware for centralized error handling
    next(error);
  }
};

/**
 * Update a job by its ID.
 *status - Done
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 * @returns {void}
 */
const updateJob = async (req, res, next) => {
  try {
    // Find and update a job by its ID, excluding the 'openaiEmbeddings' field, and populate the 'company' field
    const job = await Jobs.findOneAndUpdate(
      { _id: req.params },
      req.body,
      {
        new: true,
      },
      { openaiEmbeddings: 0 }
    ).populate("company");

    // If the job is not found, throw a conflict error
    if (!job)
      throw createError.Conflict(
        `Job with _id: ${req.params._id} is unavailable`
      );

    // Send the updated job as a response
    res.send({ job });
  } catch (error) {
    // Pass the error to the next middleware for centralized error handling
    next(error);
  }
};

module.exports = {
  postJob,
  getJob,
  getAllJobs,
  deleteJob,
  updateJob,
};
