// setup CORS options
const whiteList = [
	"http://localhost:4000",
	"http://localhost:3000",
	"http://127.0.0.1:3000",
	"https://www.corenglish.com",
	"https://corenglish.com",
	"https://corenglish-main-git-tj-ebook-landing-tiojevero.vercel.app",
];

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};

module.exports = corsOptions;
