const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  console.log(req.params);
  const id = req.params.id;

  const fetchMovie = moviesModel.findOne({
    _id: id,
  });
  try {
    if (!fetchMovie) throw "Movie id is required";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.messga,
    });
    return;
  }

  try {
    await moviesModel.deleteOne({
      _id: id,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    messgae: "Movie deleted successfully",
  });
};
module.exports = deleteMovie;
