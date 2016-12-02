angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};
  $scope.data.outreach = {};
  $scope.data.stage = {};
  $scope.data.offers = {};

  $scope.submitForm = function() {
    console.log(">>>>>>>>>>>>>line 9, submitForm, preHTTP servicePOSTADATA calls", $scope.data)
    HttpService.postData({data: $scope.data})
    console.log("+++++++++++++++line 9, submitForm, inHTTP", $scope.data)
      .then(function(resp) {
        console.log(resp);
      })
    }
  })
.factory('HttpService', function($http){
  let postData = function(data) {
    console.log('hello')
    return $http.post('/', data)
    .then(function(resp) {
      console.log("data, resp", data, resp)
      return resp
    })
  }
  return {
    postData: postData
  }
})
