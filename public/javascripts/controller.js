var noticiasApp = angular.module('noticiasApp',[]);

noticiasApp.controller('NoticiasController', function ($scope,$http) {
	var urlMorrinhos = '/json';
	var urlGoiania = '/jsonIF';
	
	 $http.get(urlMorrinhos)
    .success(function(data){
       console.log('success');
       $scope.noticiasMorrinhos = data;
    })
    .error(function () {
      console.log('error')
    });

    $http.get(urlGoiania)
    .success(function(data){
       console.log('success');
       $scope.noticiasGoiania = data;
    })
    .error(function () {
      console.log('error')
    });		

});