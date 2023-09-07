const fs = require("fs");

function makeid(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return `\nNODE_JWT_SECRET=${result}`;
}

fs.appendFile(".env", makeid(50), (err) => {
	if (err) {
		console.error(err);
	}
	console.log("Key generated !");
});
