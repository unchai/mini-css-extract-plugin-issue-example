const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcdir = path.resolve(__dirname, "src");

module.exports = {
	mode: "development",
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
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[contenthash].css",
		}),
	],
};

