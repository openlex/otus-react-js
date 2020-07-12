// https://jestjs.io/docs/en/configuration.html

module.exports = {
	coverageDirectory: "coverage",
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
	moduleNameMapper: {
		// https://jestjs.io/docs/en/webpack#handling-static-assets
		"\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
		"^@/(.*)$": "<rootDir>/src/$1",
	}
};
