const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? 'inline-sourcemap' : !1,
    entry: [
        "babel-polyfill",
        path.join(__dirname, 'src/js/app.js')
    ],
    output: {
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ 
                fallback: "style-loader", 
                use: [
                    {
                        loader:'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }
                ],
            }) },
            { test: /\.(eot|svg|ttf|woff|woff2|otf)$/, 
                use: [{ 
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]'
                    }
                }]
            },
            { test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: '[name].[ext]'
                }
            },
            { test: /\.(htm|html)$/i, use: [
                {
                    loader: 'html-loader',
                    options: {
                        attrs: ["img:ng-src", "a:ng-href"],
                        minimize: true
                    }
                }
            ] }
        ]
    }
    ,plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 7890,
        host: '192.168.16.101',
        overlay: debug,
        hot: true,
        inline: true,
    }
}