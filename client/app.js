angular.module('AppTracker', [
  'FormController',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'FormController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
