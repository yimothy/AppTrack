angular.module('AppTracker', [
  'Form',
  'Update',
  'SignUp',
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
