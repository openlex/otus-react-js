const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{ test: /\.txt$/, use: 'raw-loader' },
			{ test: /\.html$/i, loader: 'html-loader' },
			{ test: /\.(js|ts)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
