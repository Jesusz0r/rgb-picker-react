const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const path = require('path');

const HtmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname + '/src/index.html'),
	inject: 'body'
});
const ExtractText = new ExtractTextWebpackPlugin('style.css');
const OpenBrowser = new OpenBrowserWebpackPlugin({
	url: 'http://localhost:3000'
});

const allPlugins = [HtmlPlugin, ExtractText, OpenBrowser];

module.exports = {
    entry: path.join(__dirname + '/src/index.js'),
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractText.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [...allPlugins],
    devServer: {
        port: 3000,
        inline: true,
        contentBase: 'public',
        compress: true
    }
}