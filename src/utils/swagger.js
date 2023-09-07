const swaggerJSDoc = require("swagger-jsdoc");

const optionsSwagger = {
	swaggerDefinition: {
		openapi: "3.0.1",
		info: {
			title: "COREnglish REST API",
			version: "1.0.0",
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "apiKey",
					scheme: "bearer",
					name: "Authorization",
					in: "header",
				},
			},
		},
		servers: [
			{
				url: "http://localhost:4000/api",
				description: "COREnglish - Localhost Server",
			},
			{
				url: "https://api-dev.corenglish.com/api",
				description: "COREnglish - Development Server",
			},
		],
	},
	apis: [`./src/routes/**/*.js`],
};

const swaggerSpesification = swaggerJSDoc(optionsSwagger);

module.exports = swaggerSpesification;
