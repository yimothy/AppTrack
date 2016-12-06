angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};
  $scope.role = {};
  $scope.results = {};
  $scope.job = {};
  $scope.stageattrs = {};

  $scope.submitForm = function() {


    HttpService.postData({"data": $scope.data})
      .then(function(resp) {
        console.log(resp)
      })
    }

    $scope.getJobData = function() {
      HttpService.getData()
        .then(function(res){
          console.log("this is res", res)
        $scope.results = res.data;
        })

    }

    $scope.getSingleJob = function() {
      console.log($scope.role);

      HttpService.getJob({"role": $scope.role})
        .then(function(resp) {
          console.log(resp)
          $scope.job = resp.data;
        })

    }

    $scope.pushToStages = function() {
      console.log("$scope.results, $scope.results.$index within push to stages", $scope.results, $scope.results.index)
      HttpService.putStageData({"id": $scope.data._id, "stages": $scope.stageattrs})
      .then(function(resp) {
        console.log(resp)
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

  let getData = function() {
    return $http.get('/form')
      .then(function(res){
        return res
      })

  }

  let getJob = function(role) {
  //vvvv this only takes one param here
    return $http.get('/form/' + role)
    .then(function(res){
      return res;
    })
  }

  let putStageData = function(stage) {
    console.log("Stage from within PutStageData HTTP service", stage);
    return $http.put('/form/' + stage.id, stage)
    .then(function(res) {
      console.log(res)
      return res;
    })


  }


  return {
    postData: postData,
    getData: getData,
    getJob: getJob,
    putStageData: putStageData
  }
})
