const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: {
		index: './src/js/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name].js'
	},
	module: {
		rules: []
	},
	plugins: [],
	node: {
		// global: false,
		// setImmediate: false
	},
	devtool: 'source-map'
}
if(process.env.NODE_ENV === 'production'){
	module.exports.plugins.push(new UglifyJsPlugin({
		uglifyOptions: {
			ecma: 8
		}
	}))
}