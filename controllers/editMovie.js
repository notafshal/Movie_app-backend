const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { id, movie_name, info, rating, description } = req.body;
  try {
    if (!id) throw "Movie id is required";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
    await moviesModel.updateOne(
      {
        _id: id,
      },
      {
        movie_name: movie_name,
        rating: rating,
        info: info,
        description: description,
      },
      {
        runValidators: true,
      }
    );
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "movie updated successfully",
  });
};
module.exports = editMovie;
