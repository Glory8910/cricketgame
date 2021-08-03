const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: path.join(__dirname, '/cricket.ts'),
	output: {
		// filename: 'cricket.js',
		// path: __dirname

		
		path: path.resolve('./build'),
		filename: 'bundle.js'
	},
	
	devtool:"source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
	,

	{
		test: /\.(css)$/,
		use: [  MiniCssExtractPlugin.loader, 'css-loader'],
	  },
	  {
		test: /\.(mp3|wav|wma|ogg)$/,
		use: {
		  loader: 'file-loader',
		  options: {
			name: '[name].[contenthash].[ext]',
			outputPath: 'assets/audio/',
			publicPath: 'assets/audio/'
		  }
		}
	  }
	 
]
},
plugins: [
new MiniCssExtractPlugin(),
new HtmlWebpackPlugin({
  // injects bundle.js to our new index.html
  inject: true,
  // copys the content of the existing index.html to the new /build index.html
  template:  path.resolve('./index.html'),
}),
],
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
}
