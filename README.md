# 概述
AngularJS1.4.8 + webpack4.5.0 + ES6

为IE8准备的脚手架

## 如何使用这个工程
`git clone https://github.com/jDragonV/ng6-starter.git`

`npm install`

`npm run dev`

打开dist/index.html

# 怎么搭建这样的工程

`mkdir ng6-starter`
`npm init -y`
`npm i -g webpack`
`npm i -D webpack webpack-cli`
`npm i -D babel babel-core babel-loader babel-preset-env`
`npm i -D style-loader css-loader html-loader url-loader file-loader expose-loader`
`npm i -D html-webpack-plugin extract-text-webpack-plugin@next `
`npm i -S angular@1.4.8`
`npm i -S @uirouter/angularjs`
`npm i -S jquery@1.12.4`
`npm i -S bootstrap@3.3.7`
`npm i -D webpack-dev-server`


# 解决了哪些问题

1. 如何引入jQuery, 且可以暴露至全局可用 (window.$)
2. 如何引入bootstrap
3. IE8
4. Babel 编译代码
5. 分离css, 压缩css
6. 根据模板生成index

### Webpack
- 构建工具
- 源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码

>
- 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
- 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
- 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
- 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
- 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。
- 构建其实是工程化、自动化思想在前端开发中的体现，把一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。 构建给前端开发注入了更大的活力，解放了我们的生产力。
>

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
- xxx

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


# 依赖


遇到的问题

- [?]. html-loader 和 html-webpack-plugin 有什么区别(webpack处理模板html)
- [?]. resolve.alias
- [?]. 各个loader作用
    css
    style
    expose
    file
    url
    postcss
    autoprefixer


- [?]. JS按条件加载IE
- [?]. JS按需加载
- [?]. webpack处理图片
    1. css中的图片
        - url-loader
        - file-loader
    2. html中的图片
        - html-loader


- [?]. 测试babelrc中modules有用么
- [?]. angular-ie8 通过webpack引入，报错

✅ webpack - ExtractTextPlugin
✅ webpack - [name].[hash:8].[ext]
✅ import 顺序 - 按引入顺序打包
✅ 引用bootstrap中的css

babel-polyfill --save
uglifyjs-webpack-plugin
copy-webpack-plugin
postcss-loader
*/