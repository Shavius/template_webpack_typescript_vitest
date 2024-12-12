import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotenvWebpack from "dotenv-webpack";

const __dirname = path.resolve();
let mode = "development";
let devtool = "source-map";
let envPath = ".env.production";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	devtool = false;
}

if (process.env.ENV_PATH === "develop") {
	envPath = ".env.develop";
}

console.log("Mode:", mode);
console.log("Env-Path:", envPath);

export default {
	mode: mode,
	devtool: devtool,

	entry: path.resolve(__dirname, "src", "ts/main.ts"),
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
		filename: "js/main.js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "404.html",
			template: path.resolve(__dirname, "src", "404.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "style/main.css",
		}),
		new DotenvWebpack({
			path: envPath,
			systemvars: true,
		}),
	],

	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\/(ts|js)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.s?css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
			{
				test: /\.(woff2?|ttf|eot|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
			{
				test: /\.(ico)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		client: {
			overlay: true,
		},
		port: 3000,
		hot: true,
	},
};
