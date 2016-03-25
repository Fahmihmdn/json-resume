var JsonResume = angular.module("JsonResume", []);
JsonResume.controller("resumeController", function($scope, $http) {
    $http.get("resume.json")
        .success(function(response){
            $scope.resumeData = response;
        });
});
