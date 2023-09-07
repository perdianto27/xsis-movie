/**
 * Parse Html Mail Template
 * Replace all strings between brackets with the given data
 *
 * @param {string} html The hatml sting
 * @param {object} data The values taht will replace all strings between brackets
 * @param {function} next Callback function
 *
 * @returns {string} parsedHtml || {object} error
 */
exports.parseMailTemplate = (html, data, next) => {
	let error, parsedHtml;

	// If not html given, sets error
	if (!html) {
		error = {
			name: "RequiredValue",
			message: "You need to specify a template to parse",
		};
	}

	// If not data given sets error
	if (!data) {
		error = { name: "RequiredValue", message: "You need to specify the data" };
	}

	// If error retunn error
	if (error) {
		if (next && typeof next === "function") next(error, null); // If there is a callback function, send the error
		return error;
	}

	// Repalces string between brackets
	parsedHtml = html.replace(/\{\{(.+?)\}\}/g, (_, g) => {
		// If there is a wrong data index, returns error
		if (!data[g.trim()]) {
			error = { name: "IndexDoesNotExists", message: "Index missing on data" };
			if (next && typeof next === "function") next(error, null);
			return error;
		}

		return data[g.trim()];
	});

	if (next && typeof next === "function") next(error, parsedHtml); // If there is a callback function, send the parsed html

	return parsedHtml;
};
