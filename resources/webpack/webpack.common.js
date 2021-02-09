const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack");
const plugins = require("./plugins");

module.exports = {
  entry: ["/app/assets/scripts/App.js"],
  module: {
    rules: [loaders.JSLoader],
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new webpack.ProgressPlugin(), plugins.ESLintPlugin],
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
