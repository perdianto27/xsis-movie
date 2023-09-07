const service = require("../services/movie.service");
const { successResponse } = require("../utils/response");

exports.getMovie = async (req, res, next) => {
	try {
		const response = await service.getMovie();

		return successResponse(res, response, "User Information", 201);
	} catch (error) {
		next(error);
	}
};

exports.getMovieById = async (req, res, next) => {
	try {
		const id = req.param.id;
		const payload = req.body;
		const response = await service.getMovieById(id, payload);

		return successResponse(res, response, "Get Movie Information", 200);
	} catch (error) {
		next(error);
	}
};

exports.addMovie = async (req, res, next) => {
	try {
		const payload = req.body;
		const response = await service.addMovie(payload, locales);
		return successResponse(res, response, "Add Movie Success", 200);
	} catch (error) {
		next(error);
	}
};

exports.updateMovieById = async (req, res, next) => {
	try {
		const user_id = req.param.id;
		const payload = req.body;
		const response = await service.getMovieById(user_id, payload);

		return successResponse(res, response, "Update Movie Information", 200);
	} catch (error) {
		next(error);
	}
};

exports.deleteMovieById = async (req, res, next) => {
	try {
		const id = req.param.id;
		const response = await service.deleteMovieById(id);

		return successResponse(res, response, "Delete Movie Information", 200);
	} catch (error) {
		next(error);
	}
};