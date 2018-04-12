//import webpack from 'webpack';
//import path from 'path';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? 'inline-sourcemap' : !1,
    entry: {
        main: './src/js/app.js',
        //vendor: ['angular']
    },
    output: {
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ 
                fallback: "style-loader", 
                use: 'css-loader',
            }) },
            { test: /\.(eot|svg|ttf|woff|woff2|otf)$/, 
                use: [{ 
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]',
                        publicPath: './fonts/',//css内引用路径
                        outputPath: 'res/fonts/'//生成路径
                    }
                }]
            },
            { test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/], loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'res/img/[name].[hash:8].[ext]'
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    }
    ,plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'res/[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery'
        }),

        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: false,
        //         ecma: 8,
        //         ie8: true,
        //         safari10: true
        //     }
        // }),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src/libs',
        //     to: __dirname + '/dist/libs'
        // }]),
    ]
    // ,optimization:{
    //     splitChunks:{
    //         cacheGroups:{ // 单独提取JS文件引入html
    //             vendor:{ // 键值可以自定义
    //                 chunks:'initial', // 
    //                 name:'jquery', // 入口的entry的key
    //                 enforce:true   // 强制 
    //             },
    //             aaa:{
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 enforce: true
    //             }
    //         }
    //     }
    // }
}


/**
use:ExtractTextPlugin.extract({
                    fallback:'style-loader', // 回滚
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'} //利用postcss-loader自动添加css前缀
                    ],
                    publicPath:'../' //解决css背景图的路径问题
                })
 */