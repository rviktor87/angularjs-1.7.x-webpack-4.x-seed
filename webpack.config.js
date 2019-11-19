let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let packageJson = require('./package.json');
let path = require('path');

module.exports = {
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js"
    },
    entry: {
        vendor: Object.keys(packageJson.dependencies),
        app: "./app/index.js"
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules:
            [
                { test:/\.css$/, use:['style-loader','css-loader'] },
                { test: /.html$/, use: ["raw-loader"]},
            ]
    },
    mode: 'development',
    // mode: 'production' « must be solved in the case of production
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './app/index.html',
            path: path.join(__dirname,"/dist/"),
            filename: 'index.html'
        })
    ]
};