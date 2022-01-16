const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./src/index.js",

    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash].[ext]",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: 'asset/resource',
            },

        ]
    },

    devServer: {
        static: path.resolve(__dirname, '../dist'),
        hot: true,
        watchFiles: path.resolve(__dirname, './src'),
        open: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            title: 'Battleship',
        })
    ]
}