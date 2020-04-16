const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  distDir: "../../dist/client",
  webpack: function(config) {
    // images
    config.module.rules.push({
      test: /\.(svg|png|jpg|jpeg)$/,
      use: 'url-loader'
    });

    // env
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
};
