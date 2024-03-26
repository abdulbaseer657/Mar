const express = require("express");

const router = express.Router();

const { resumeSimilarity } = require("../Controllers/similarity.controller");

router.route("/similarity").post(resumeSimilarity);

module.exports = router;
