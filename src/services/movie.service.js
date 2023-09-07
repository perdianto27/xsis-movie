const { Movie } = require("../models");
const { NotFound } = require("../utils/error");

const getMovie = async () => {
	const movie = await Movie.findAll();

	return movie;
};

const getMovieById = async (id) => {
	const movie = await Movie.findByPk(id);
	if (!movie) {
		throw new NotFound("movie not found");
	}

	return movie;
};

const updateMovieById = async (id, payload) => {
	const movie = await Movie.findByPk(id);
	if (!movie) {
		throw new NotFound("movie not found");
	}

	await movie.update(payload);
	return movie;
};

const addMovie = async (payload) => {
	const data = {
		full_name: payload.name,
		email: payload.email,
		country: payload.country,
		interest: payload.interest,
	};

	const movie = await Movie.create(data);

	return movie;
};

const deleteMovieById = async (id) => {
	const movie = await Movie.findByPk(id);
	if (!movie) {
		throw new NotFound("movie not found");
	}

	await movie.delete(id);
	return movie;
};

module.exports = {
	getMovie,
	getMovieById,
	addMovie,
	updateMovieById,
	deleteMovieById
};