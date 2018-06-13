
import uiRouter from 'angular-ui-router';

export default angular.module('app.router', [uiRouter])
.config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider', (
    $stateProvider, $urlRouterProvider, $httpProvider
) => {

    const template = name => require(`../templates/${name}.html`)

    $stateProvider
        .state('home', {
            url: '/home',
            template: template('home'),
            controller: 'HomeCtrl'
        })
        .state('table', {
            url: '/table',
            template: template('table'),
            controller: 'TableCtrl'
        });

    
    $urlRouterProvider.otherwise('/home');
}])
.name;