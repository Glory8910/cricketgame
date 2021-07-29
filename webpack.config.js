const path = require('path');
module.exports = {
	entry: path.join(__dirname, '/cricket.ts'),
	output: {
		filename: 'cricket.js',
		path: __dirname
	},
	devtool:"source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
}
