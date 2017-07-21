module.exports = {
	testHost: process.env.testHost || "https://www.apple.com/today",
	seleniumHost: process.env.selenium || "localhost",
	capabilities: {
		browserName: "chrome"
	}
};
