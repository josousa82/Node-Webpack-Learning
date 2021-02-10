const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, "./.eslintrc"),

  context: path.resolve(__dirname, "../../src/assets/scripts/"),
  files: "**/*.js",
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "../../src/"),
  files: "**/*.css",
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  ESLintPlugin: ESLintPlugin,
  StyleLintPlugin: StyleLintPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin,
};
