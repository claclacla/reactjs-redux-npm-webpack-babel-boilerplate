const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const appConfig = require("./config.json").dev;

module.exports = merge(common, {
  externals: {
    AppConfig: JSON.stringify(appConfig)
  }
});