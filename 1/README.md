# 概述
`AngularJS1.3.7 + webpack4.5.0 + ES6` - Base

> 基础版本


### 功能包括

- 生成index
- 打包js
- 打包css
- 打包html
- 打包字体文件
- 打包css中的图片
- 打包html中的图片

### 遇到的问题

[!]. 识别html中img的属性ng-src需要：attrs: ["img:ng-src"]

[!]. webpack-dev-server 报错 [HMR] Hot Module Replacement is disabled

A: plugins里面缺少new webpack.HotModuleReplacementPlugin()

[?]. 打包后文件如何分文件夹存放