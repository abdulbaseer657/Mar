const JobPost = require("../Models/jobpost.model");

// Controller function to create a new job post
const createJobPost = async (req, res, next) => {
  try {
    const jobPostData = req.body;
    const jobPost = new JobPost(jobPostData);
    const savedJobPost = await jobPost.save();
    res.status(201).json(savedJobPost);
  } catch (error) {
    next(error);
  }
};

// Controller function to get a job post by its ID
const getJobPost = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const jobPost = await JobPost.findById(jobId);
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(jobPost);
  } catch (error) {
    next(error);
  }
};

// Controller function to get all job posts
const getAllJobPosts = async (req, res, next) => {
  try {
    const jobPosts = await JobPost.find();
    res.json(jobPosts);
  } catch (error) {
    next(error);
  }
};

// Controller function to update a job post by its ID
const updateJobPost = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const updatedJobPostData = req.body;
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      jobId,
      updatedJobPostData,
      { new: true }
    );
    if (!updatedJobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(updatedJobPost);
  } catch (error) {
    next(error);
  }
};

const addApplicantToJobPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, score } = req.body;

    // Find the post by its ID
    const jobPost = await JobPost.findById(id);

    // If post not found, return 404 error
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    // Add the applicant to the applicants array
    jobPost.applicants.push({ username, score });

    // Save the updated post
    const updatedJobPost = await jobPost.save();

    // Respond with the updated post
    res.json(updatedJobPost);
  } catch (error) {
    next(error);
  }
};

// Controller function to delete a job post by its ID
const deleteJobPost = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const deletedJobPost = await JobPost.findByIdAndDelete(jobId);
    if (!deletedJobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(deletedJobPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createJobPost,
  getJobPost,
  getAllJobPosts,
  updateJobPost,
  addApplicantToJobPost,
  deleteJobPost,
};
