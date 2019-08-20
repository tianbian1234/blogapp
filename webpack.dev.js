const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port: 9090,
        hot: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/src/index.html'
        }),
    ]
})