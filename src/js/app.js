import angular from 'angular';
import router from './router';
import controller from './controller';
//require("expose-loader?$!jquery");
//import $ from 'jquery';
import 'bootstrap';
import '../css/bootstrap.css';
import '../css/bootstrap-custom.css';
import '../css/theme.default.css';

const app = angular.module('app', [router, controller]);

app
.constant('APP', {
    host: 'http://192.168.5.5:8080'
})
.run([()=>{

}]);







/*

TODO JS按条件加载IE
TODO JS按需加载

✅ webpack - ExtractTextPlugin
✅ webpack - [name].[hash:8].[ext]
✅ import 顺序 - 按引入顺序打包
*/