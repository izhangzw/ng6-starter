//import angular2 from '../libs/angular/angular';
//import angular from 'angular';
import router from './router';
import commons from './commons';
import controller from './controller';
//require("expose-loader?$!jquery");
//import $ from 'jquery';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-custom.css';
import '../css/theme.default.css';


const app = angular.module('app', [router, commons, controller]);

app
.constant('APP', {
    host: 'http://192.168.5.5:8080'
})
.run(['$rootScope', '$log', ($rootScope, $log)=>{
    $rootScope.$on('unauth', e => {
        $log.log('请登陆!!')
    })  
}]);