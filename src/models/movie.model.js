module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define(
		"movies",
		{
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: { type: Sequelize.STRING },
			rating: { type: Sequelize.FLOAT },
			image: { type: Sequelize.STRING, allowNull: true },
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: sequelize.fn("NOW"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: sequelize.fn("NOW"),
			}
		},
		{
			timestamps: false,
		}
	);

	return Movie;
};