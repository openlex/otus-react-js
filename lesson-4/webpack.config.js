const path = require('path');

const webpackRules = require('./webpack.rules');
const webpackPlugins = require('./webpack.plugins');
const aliases = require('./webpack.aliases');

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
		alias: aliases,
	},
	module: { ...webpackRules },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8000,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [...webpackPlugins]
}

module.exports = (env, argv) => {

	if (argv.mode === 'development') {
		configs.devtool = 'source-map';
	}

	if (argv.mode === 'production') {
	}

	return configs;
};
