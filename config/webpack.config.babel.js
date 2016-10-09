'use strict';

var path = require ('path');
var webpack = require ('webpack');

var DEVELOP = !process.argv.includes('--release');
var VERBOSE = process.argv.includes('--verbose');

var clientConfig = {
    devtool: DEVELOP ? 'cheap-module-eval-source-map' : 'source-map',
    entry: [
        './app/client.js',
        ...(DEVELOP ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'] : [])
    ],
    output: {
        path: path.join(__dirname, '../app/public/'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': DEVELOP ? '"development"' : '"production"',
            __DEV__: DEVELOP
            , 'process.env.BROWSER': true
        }),
        ...(DEVELOP ? [new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()]
            : [new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: VERBOSE,
                screw_ie8: true
            }
        })])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};

module.exports = clientConfig;