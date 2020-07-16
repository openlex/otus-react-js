// https://jestjs.io/docs/en/configuration.html
//
// module.exports = {
// 	bail: true,
// 	clearMocks: true,
// 	coverageDirectory: "coverage",
// 	testEnvironment: "jsdom",
// 	moduleNameMapper: {
// 		// https://jestjs.io/docs/en/webpack#handling-static-assets
// 		// "\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
// 		"^@/(.*)$": "<rootDir>/src/$1",
// 		"^@containers(.*)$": "<rootDir>/src/containers",
// 		"^@components(.*)$": "<rootDir>/src/components$1",
// 		"^@types(.*)$": "<rootDir>/src/types",
// 		"^@(.*)$": "<rootDir>/src",
// 	},
// 	transform: {
// 		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
// 	},
// 	setupFilesAfterEnv: ["<rootDir>/jestSettings.js"],
// 	verbose: true,
// };
module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jestSettings.js"],
	moduleNameMapper: {
		// https://jestjs.io/docs/en/webpack#handling-static-assets
		"\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@containers(.*)$": "<rootDir>/src/containers",
		"^@components(.*)$": "<rootDir>/src/components$1",
		"^@types(.*)$": "<rootDir>/src/types",
		"^@(.*)$": "<rootDir>/src",
	},
	transformIgnorePatterns: [
		'/node_modules/'
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	}
};

