`mkdir webpack-demo`
`npm init -y`
`npm i -g -D webpack webpack-cli`
`npm i -D babel-core babel-loader babel-preset-env`
`npm i -S angular`

# 依赖
# 解决了哪些问题

1. 如何引入jQuery, 且可以暴露至全局可用 (window.$)



### Babel
- babel-loader调用babel-core的api使用babel-preset-env的规则进行转码

#### .babelrc 配置

- presets 是一揽子plugins
- plugins

`JSON
{
    "presets": [],
    "plugins": [],
}
`



### webpack - plugins

> copy-webpack-plugin
- 原封不动复制文件到规定目录

> uglifyjs-webpack-plugin
- 压缩文件
- 只有压缩的功能么, IE8配置是怎么回事？

> extract-text-webpack-plugin
- 分离css用到了, 还有什么功能

> html-webpack-plugin
-

#### 使用jQuery
两种方式
1. 全局引入
`require("expose-loader?$!jquery");`

2. 配置引入,
[webpack.ProvidePlugin - 按需自动加载模块](https://doc.webpack-china.org/plugins/provide-plugin/#src/components/Sidebar/Sidebar.jsx)
[expose-loader - 使$和jQuery可以全局使用](https://doc.webpack-china.org/loaders/expose-loader/#src/components/Sidebar/Sidebar.jsx)

```JavaScript
module:{
    rules:[
        {
            test: require.resolve('jquery'),//require.resolve 用来获取模块的绝对路径
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            },{
                loader: 'expose-loader',
                options: '$'
            }]
        }
    ]
},
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery'
    })
]```

- [?]. resolve.alias
