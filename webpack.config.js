const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcdir = path.resolve(__dirname, "src");

module.exports = {
	entry: {
		entryA: path.join(srcdir, "/entryA.js"),
		entryB: path.join(srcdir, "/entryB.js"),
		entryC: path.join(srcdir, "/entryC.js"),
		entryD: path.join(srcdir, "/entryD.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract("css-loader"),
			}
		],
	},
	plugins: [
		new ExtractTextPlugin("[contenthash].css"),
	],
};

