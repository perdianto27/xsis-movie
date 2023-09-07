module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define(
		"movies",
		{
			title: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			description: { type: Sequelize.STRING },
			rating: { type: Sequelize.FLOAT },
			IMAGE: { type: Sequelize.STRING, allowNull: true },
			verified_at: { type: Sequelize.DATE },
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: sequelize.fn("NOW"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: sequelize.fn("NOW"),
			},
		},
		{
			timestamps: false,
		}
	);

	return Movie;
};