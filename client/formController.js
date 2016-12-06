angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};
  $scope.role = {};
  $scope.results = {};
  $scope.job = {};
  $scope.stageattrs = {};
  var addStage =
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
    $scope.pushToStages = function($index) {
      console.log("$index within push to stages", $index)
      HttpService.putStageData({"id": $scope.results[$index]._id, "stages": $scope.stageattrs})
      .then(function(resp) {
        console.log("this is the resp", resp);
        $scope.getJobData();
      })
    }
    $scope.enableEditor = function($index) {
     $scope.editorEnabled = true;
     $scope.editableCompanyName = $scope.results[$index].companyName;
   }

   $scope.save = function($index){
     $scope.results[$index].companyName = $scope.editableCompanyName;
     console.log("SAVE RESULTS++++++++", $scope.editableCompanyName);

     $scope.editorEnabled=false;
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
    console.log("Stage from within PutStageData HTTP service", stage.stages);
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
