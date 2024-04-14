const express = require("express");
const router = express.Router();

const {
  createJobPost,
  getJobPost,
  getAllJobPosts,
  updateJobPost,
  addApplicantToJobPost,
  deleteJobPost,
} = require("../Controllers/jobpost.controller");

// Routes for CRUD operations on job posts
router.route("/jobpost/create").post(createJobPost);
router.route("/jobpost/:id").get(getJobPost);
router.route("/jobposts").get(getAllJobPosts);
router.route("/jobpost/update/:id").put(updateJobPost);
router.route("/jobpost/updateapplicant/:id").put(addApplicantToJobPost);
router.route("/jobpost/delete/:id").delete(deleteJobPost);

module.exports = router;
