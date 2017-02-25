var webpackBaseConfig = require("./webpack.base");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');
var merge = require('webpack-merge');
var dev = merge(webpackBaseConfig, {
    plugins: [
        new ExtractTextPlugin('styles/[name].css'),
        new HtmlWebpackPlugin({
            template: config.srcDir + '/index.html',
            filename: config.distDir + '/views/index.html'
        })
    ],
});
module.exports = dev;
