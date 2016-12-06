angular.module('SignUp', [])
.controller('SignupController', function($scope, HttpServiceLogin){
  $scope.username = {};
  $scope.password = {};

  $scope.submitCredentials = function() {

    HttpService.postData({"username": $scope.username, "password": $scope.password})
      .then(function(resp) {
        console.log(resp)
        $scope.username = '';
        $scope.password = '';
      })
    }
  })
.factory('HttpServiceLogin', function($http){

  let postData = function(data) {

    return $http.post('/signup', data)
    .then(function(resp) {
      return resp
    })
  }


  return {
    postData: postData
  }
})
