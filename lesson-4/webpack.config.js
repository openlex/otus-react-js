const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackRules = require("./webpack.rules");

const configs = {
	entry: './src/index.tsx',
	devtool: "source-map",
	output: {
		path: path.join(__dirname, './dist'),
		filename: "index.js",
		publicPath: '/'
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		alias: {
			components: path.resolve(__dirname, "src/components"),
			"@": path.resolve(__dirname, "src"),
		},
	},
	module: { ...webpackRules },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8000,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
			template: "./public/index.html",
		}),
		new CleanWebpackPlugin(),
	],
}

module.exports = (env, argv) => {

	if (argv.mode === 'development') {
		configs.devtool = 'source-map';
	}

	if (argv.mode === 'production') {
	}

	return configs;
};
