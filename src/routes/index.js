const express = require("express");
const app = express();

// routes
const movieRouter = require("./movie");
app.use("/", movieRouter);

module.exports = app;
