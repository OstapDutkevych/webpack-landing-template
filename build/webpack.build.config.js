const {NormalModuleReplacementPlugin} = require('webpack');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new NormalModuleReplacementPlugin(
      /environment\.ts/,
      './environment.prod.ts'
    ),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
