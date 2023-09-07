module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		"user",
		{
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			password: { type: Sequelize.STRING },
			full_name: { type: Sequelize.STRING },
			picture: { type: Sequelize.STRING, allowNull: true },
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

	return User;
};
