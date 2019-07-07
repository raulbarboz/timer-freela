var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({path: '.env'})

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules:[
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
            'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
            'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
            'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
            'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
            'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID)
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/',
        host:'localhost',
        port:'8080',
        disableHostCheck: true,
        hot: true
    }
}