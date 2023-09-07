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
	const data = {
		title: payload.title,
		description: payload.description,
		rating: payload.rating,
		image: payload.image
	};

	const movie = await Movie.findByPk(id);
	if (!movie) {
		throw new NotFound("movie not found");
	}

	const response = await Movie.update(data,
		{
			where: {
				id
			}
		});
	return movie;
};

const addMovie = async (payload) => {
	const data = {
		title: payload.title,
		description: payload.description,
		rating: payload.rating,
		image: payload.image
	};

	const movie = await Movie.create(data);

	return movie;
};

const deleteMovieById = async (id) => {
	const movie = await Movie.findByPk(id);
	if (!movie) {
		throw new NotFound("movie not found");
	}

	const response = await Movie.destroy({
		where: {
			id
		}
	});

	return response;
};

module.exports = {
	getMovie,
	getMovieById,
	addMovie,
	updateMovieById,
	deleteMovieById
};