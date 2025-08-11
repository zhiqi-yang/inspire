const path = require("path");
const { src, dist, PUBLIC_PATH, env } = require("./config");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: [path.join(src, "index.tsx")],
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
      },
      {
        test: /\.s[ac]ss$/i,
        include: [/src/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:10]",
              },
            },
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?v=[\d\.]+)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(svg)$/,
        type: "asset/inline",
      },
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
