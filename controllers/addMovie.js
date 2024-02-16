const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  //validations...
  const { movie_name, info, rating, description } = req.body;

  try {
    //if (!movie_name) throw "Movie name is required!";
    if (!info) throw "info is required!";
    if (!rating) throw "rating should be provided";
    if (rating < 1 || rating > 10) throw "rating must be between 1-10";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  try {
    await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }

  res.status(200).json({
    status: "success",
    message: "Movie Added",
  });
  return;
};

module.exports = addMovie;
