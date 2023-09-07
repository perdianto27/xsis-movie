const env = process.env.NODE_ENV || "development";
const config = require("../config/db.config")[env];

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,
		pool: config.pool,
		logging: false,
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Movie = require("../models/movie.model")(sequelize, Sequelize);
module.exports = {
	db,
	Movie
};
