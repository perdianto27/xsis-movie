const express = require("express");
const controller = require("../../controllers/movie.controller");

const router = express.Router();

router.get("/movie", controller.getMovie);
router.get("/movie/:id", controller.getMovieById);
router.post("/movie", controller.addMovie);
router.patch("/movie/:id", controller.updateMovieById);
router.delete("/movie/:id", controller.deleteMovieById);


module.exports = router;
