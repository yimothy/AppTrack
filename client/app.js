angular.module('AppTracker', [
  'Form',
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
