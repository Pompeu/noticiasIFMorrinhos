angular.module('App', [])
  .controller('MainCtrl', ['$scope','$http', function($scope, $http){
    $scope.noticias = null;
    $http.get('https://pure-shore-2163.herokuapp.com/noticias')
      .success(function(data) {
        $scope.noticias = data.noticias;
        localStorage.setItem('noticias',  JSON.stringify($scope.noticias));
        localStorage.setItem('minuto',new Date().getMinutes());
      })
      .error(function() {
        $scope.noticias = JSON.parse(localStorage.getItem('noticias'));
      })
  }])
  .controller('ListContatoCtrl',
   ['$scope','$http', function ($scope,$http) {
    $scope.items = null;
    $http.get('contato.json')
      .success(function(data) {
        setInterval(function() {
          $scope.items = data;
        }, 200)       
      })
  }])



