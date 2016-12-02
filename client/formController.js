angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};
  $scope.data.outreach = {};
  $scope.data.stage = {};
  $scope.data.offers = {};

  $scope.submitForm = function() {
    HttpService.postData({data: $scope.data})
      .then(function(resp) {
        console.log(resp);
      })
    }
  })
.factory('HttpService', function($http){
  var postData = function(data) {
    return $http.post('/', data)
    .then(function(resp) {
      return resp
    })
  }
  return {
    postData: postData
  }
})
