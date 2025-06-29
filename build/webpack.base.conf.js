const path = require("path");
const { src, dist, PUBLIC_PATH, env } = require("./config");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: [path.join(src, "index.js")],
  },
  devtool: "source-map",
  output: {
    path: dist,
    filename: "js/[name].[chunkhash:6].js",
    chunkFilename: "js/[name].[chunkhash:6].js",
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(src, "index.html"),
      chunksSortMode: "none",
      favicon: path.join(src, "favicon.ico"),
      chunks: ["app"],
    }),

  ],
};
