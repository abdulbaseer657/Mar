// Import required libraries and modules
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/init_mongodb");
const jobs = require("./Routes/jobs.route");
const similarity = require("./Routes/similarity.route");
// Create an Express application
const app = express();

// Enable CORS for cross-origin requests
const cors = require("cors");
app.use(cors());

// Set up request logging using Morgan
app.use(morgan("dev"));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route for the root endpoint
app.get("/", async (req, res, next) => {
  console.log(req.headers["authorization"]);
  res.send("status: Active, Hello from gradstem server");
});

// Define routes for authentication and protected API endpoints
app.use("/api/v0/", jobs, similarity);

// Handle 404 Not Found errors
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

// Handle errors and send appropriate responses
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 8000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
