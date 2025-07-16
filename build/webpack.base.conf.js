const path = require("path");
const { src, dist, PUBLIC_PATH, env } = require("./config");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: [path.join(src, "indexWithMyReact.tsx")],
  },
  devtool: "source-map",
  output: {
    path: dist,
    filename: "js/[name].[chunkhash:6].js",
    chunkFilename: "js/[name].[chunkhash:6].js",
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    modules: [src, "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": src,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(src, "index.html"),
      chunksSortMode: "none",
      favicon: path.join(src, "favicon.ico"),
      chunks: ["app"],
    }),
    new CleanWebpackPlugin(),
  ],
};
