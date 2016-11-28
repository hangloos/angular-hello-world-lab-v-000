function MainController($scope){
  $scope.name = "Eric";
  $scope.email = "ericloos00@gmail.com";
  $scope.phone = "8479770315";
}

angular
  .module('app')
  .controller('MainController', MainController);