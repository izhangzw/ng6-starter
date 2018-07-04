import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commons from './commons';
import controller from './controller';

import '../css/base.css';
import '../css/style.css';

const app = angular.module('app', [uiRouter, commons, controller]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('a', {
            url: '/a',
            template: require('../templates/a.html'),
            controller : 'ACtrl'
        })
        .state('b', {
            url: '/b',
            template: require('../templates/b.html'),
            controller : 'BCtrl'
        })
        .state('c', {
            url: '/c',
            template: require('../templates/c.html'),
            controller : 'CCtrl'
        });
    $urlRouterProvider.otherwise('/a');
}]);