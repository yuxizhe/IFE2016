var Webpack = require("webpack");

module.exports = {
	entry:["./webpack.js"],
	output:{
		path:__dirname,
		filename:"webpackAll.js"
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:"style!css"
		}]
	}
}