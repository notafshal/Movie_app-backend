const express = require("express");
const addMovie = require("./controllers/addMovie");
const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovie");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
require("dotenv").config();
const app = express();
app.use(express.json());

//connection
mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connection to mongo");
  })
  .catch(() => {
    console.log("No DB connection");
  });

require("./models/movies.model");

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:id", deleteMovie);
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
