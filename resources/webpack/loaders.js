const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const CSSLoader = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, "/app/assets/styles/style.css"),
      },
    },
    { loader: "css-loader", options: { importLoaders: 1 } },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  ],
};


// const ESLintLoader = {
//   test: /\.js$/,
//   enforce:'pre',
//   exclude: /node_modules/,
//   use:{
//     loader: 'eslint-loader',
//     options: {
//       configFile: path.resolve(__dirname, './.eslintrc')
//     }
//   }
// }

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
};
