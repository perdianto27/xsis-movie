const { GeneralError } = require("../utils/error");

const handleErrors = (err, req, res, next) => {
	console.error(err);
	if (err instanceof GeneralError) {
		return res.status(err.statusCode()).json({
			success: false,
			error: err.message,
		});
	}

	return res.status(500).json({ success: false, error: err.message });
};

module.exports = handleErrors;
