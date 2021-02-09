const path = require("path");

const _ESLintPlugin = require("eslint-webpack-plugin");

const { partialRight } = require("lodash");

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, "./.eslintrc"),

  context: path.resolve(__dirname, "../../app/assets/scripts/"),
  files: "**/*.js",
});

module.exports = {
  ESLintPlugin: ESLintPlugin,
};
