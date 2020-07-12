const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.ts',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{ test: /\.txt$/, use: 'raw-loader' },
			{ test: /\.html$/i, loader: 'html-loader' },
			{ test: /\.(js|ts)x?$/, loader: require.resolve("babel-loader"), exclude: /node_modules/ },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	node: {
		fs: "empty"
	}
};
