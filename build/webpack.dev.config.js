const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const LiveReloadPlugin = require("webpack-livereload-plugin");

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: baseWebpackConfig.externals.paths.dist,
        },
        port: 4200,
        compress: true,
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
