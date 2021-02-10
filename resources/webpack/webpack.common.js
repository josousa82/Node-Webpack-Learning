const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack");
const plugins = require("./plugins");

module.exports = {
  entry: ["./src/assets/scripts/App.js"],
  module: {
    rules: [loaders.JSLoader, loaders.CSSLoader, loaders.FileLoader],
  },
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "../../dist"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],

  mode: "development",
};

// module.exports = {
//   entry: "./app/assets/scripts/App.js",

//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },

//   mode: "development",
//   watch: true,

// };
