const path = require("path");

const postCssPlugins = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};



module.exports = {
  entry: "./app/assets/scripts/App.js",

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },

  mode: "development",
  watch: true,

};

// module.exports = {
//   entry: "./app/assets/scripts/App.js",

//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },

//   mode: "development",
//   watch: true,

//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         exclude: /node_modules/,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 postCssPlugins,
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
