const express = require("express");
const router = express.Router();

const {
  postJob,
  getJob,
  getAllJobs,
  deleteJob,
  updateJob,
} = require("../Controllers/jobs.controller");

router.route("/jobs/:_id").get(getJob).patch(updateJob).delete(deleteJob);

router.route("/jobs").get(getAllJobs).post(postJob);

module.exports = router;
