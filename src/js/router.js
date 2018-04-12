
import uiRouter from '@uirouter/angularjs';

export default angular.module('app.router', [uiRouter])
.config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider', (
    $stateProvider, $urlRouterProvider, $httpProvider
) => {
    // $stateProvider
    // .state('app', {
	//     url: '/app',
	//     abstract: true,
	//     templateUrl: 'templates/tabs.html'
    // });
    
    //$urlRouterProvider.otherwise('/app/notify');
}])
.name;