angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};

  $scope.submitForm = function() {
 

    HttpService.postData({data: $scope.data})

      .then(function(resp) {
   
      })
    }
  })
.factory('HttpService', function($http){
  let postData = function(data) {

    return $http.post('/form', data)
    .then(function(resp) {

    
      return resp
    })
  }
  return {
    postData: postData
  }
})
