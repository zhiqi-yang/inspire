const config = require("./webpack.base.conf");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

config.mode = "development";

config.entry.app = [
  ...config.entry.app,
  "webpack-hot-middleware/client?reload=true",
];

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new ReactRefreshWebpackPlugin()
);



module.exports = config;
