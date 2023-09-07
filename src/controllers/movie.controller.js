const service = require("../services/movie.service");
const { successResponse } = require("../utils/response");

exports.getMovie = async (req, res, next) => {
	try {
		const response = await service.getMovie();

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

exports.getMovieById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const response = await service.getMovieById(id);

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

exports.addMovie = async (req, res, next) => {
	try {
		const payload = req.body;
		const response = await service.addMovie(payload);
		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

exports.updateMovieById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const payload = req.body;
		const response = await service.updateMovieById(id, payload);

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

exports.deleteMovieById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const response = await service.deleteMovieById(id);

		return successResponse(res, {}, "Delete Movie Successfuly", 200);
	} catch (error) {
		next(error);
	}
};