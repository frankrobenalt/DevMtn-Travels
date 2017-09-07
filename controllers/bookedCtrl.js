angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
    
    $scope.cur = mainSrv.packageInfo.filter(function(package){
        return package.id == $stateParams.id;
    })[0];
  
});