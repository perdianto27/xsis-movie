function errorResponse(
	res,
	error,
	errorMessage = "Internal Service Error",
	statusCode = 500
) {
	const errorStatusCode = error.statusCode || statusCode;

	return res
		.status(errorStatusCode)
		.json({ success: false, error: error.message || errorMessage });
}

function successResponse(res, data, message = "", statusCode = 200) {
	return res.status(statusCode).json({ success: true, message, data });
}

module.exports = { errorResponse, successResponse };
