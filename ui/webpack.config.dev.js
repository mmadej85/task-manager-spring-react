var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'app')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/js/'
	},
	devServer: {
		inline: true,
		contentBase: './app',
		port: 3000,
		hot: true,
		proxy: {
			'/api/*': {
				target: 'http://localhost:8080',
				secure: false
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('development')}})
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'app')},
			{test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'app')}
		]
	}
};

