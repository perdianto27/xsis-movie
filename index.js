require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

// load files
const handleErrors = require("./src/middlewares/error-handler");
const swaggerSpesification = require("./src/utils/swagger");
const routes = require("./src/routes");

// Initialize express app
const app = express();

// configuration express app
app.use(morgan("dev"));
app.use(cors(require("./src/utils/cors")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const getDurationInMilliseconds = (start = process.hrtime()) => {
	const NS_PER_SEC = 1e9;
	const NS_TO_MS = 1e6;
	const diff = process.hrtime(start);

	return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

app.get("/", (req, res) => {
	return res.status(200).json({
		data: {
			response_time: `${getDurationInMilliseconds()}(ms)`,
			welcome: process.env.APP_NAME,
			uptimes: process.uptime(),
			timestamp: new Date().toISOString(),
			documentation: `http://${req.get("host")}/documentation`,
		},
	});
});

// Swagger Documentation
app.use(
	"/api/documentation",
	swaggerUi.serve,
	swaggerUi.setup(swaggerSpesification)
);

// routes
app.use("/api", routes);

//
app.use(handleErrors);

module.exports = app;
