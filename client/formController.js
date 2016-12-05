angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};

  $scope.submitForm = function() {
    console.log($scope.data)

    HttpService.postData({data: $scope.data})

      .then(function(resp) {
        console.log(resp);
      })
    }
  })
.factory('HttpService', function($http){
  let postData = function(data) {

    return $http.post('/form', data)
    .then(function(resp) {

      console.log("data, resp", data, resp)
      return resp
    })
  }
  return {
    postData: postData
  }
})
