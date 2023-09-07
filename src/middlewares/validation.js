const validation = (schema, property) => {
	return (req, res, next) => {
		const options = {
			abortEarly: false, // include all errors
			allowUnknown: true, // ignore unknown props
			stripUnknown: true, // remove unknown props
		};
		const { error } = schema.validate(req[property]);

		if (error) {
			const message = error.details.map((err) => err.message).join(",");
			res.status(422).json({ success: false, message });
		} else {
			next();
		}
	};
};

module.exports = validation;
