const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 8081,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './pug/index.pug',
        }),
        new HTMLWebpackPlugin({
            template: './pug/page-travel.pug',
            filename: 'page-travel.html',
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/static'),
                to: path.resolve(__dirname, 'docs'),
            },
            {
                from: path.resolve(__dirname, 'src/assets/img'),
                to: path.resolve(__dirname, 'docs/images'),
            },
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                     'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: { path: 'postcss.config.js' },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: { path: 'postcss.config.js' },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]", 
                    outputPath: 'images',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'fonts' 
                },
            },
        ]
    },
};
