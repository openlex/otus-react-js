const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackRules = require('./webpack.rules');
// const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configs = {
	entry: './src/index.tsx',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'index.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@types': path.resolve(__dirname, 'src/types/'),
			'@': path.resolve(__dirname, 'src'),
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
			template: './public/index.html',
		}),
		new CleanWebpackPlugin(),
		// new CssoWebpackPlugin(),
		new ExtractTextPlugin({
			filename:'css/[name].css',
			publicPath: './',
			allChunks: true,
		})
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
