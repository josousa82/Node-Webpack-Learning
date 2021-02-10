module.exports = {
  plugins: {
    // "press":{},
    // "autoprefixer":{},
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
      stage: 0,
    },
    cssnano: {},
  },
};
