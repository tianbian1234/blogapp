const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false
              },
              mangle: {
                safari10: true
              }
            },
            sourceMap: true,
            parallel: true
        }),
    ]
})