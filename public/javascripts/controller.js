var noticiasApp = angular.module('noticiasApp',[]);

noticiasApp.controller('NoticiasController', function ($scope,$http) {
	var urlMorrinhos = 'https://pure-shore-2163.herokuapp.com/json?callback=JSON_CALLBACK';
	var urlGoiania = 'https://pure-shore-2163.herokuapp.com/jsonIF?callback=JSON_CALLBACK';
	
	$http.jsonp(urlMorrinhos)
    .success(function(data){
       console.log('success');
       $scope.noticiasMorrinhos = data;
    })
    .error(function () {
      console.log('error')
    });
    $http.jsonp(urlGoiania)
    .success(function(data){
       console.log('success');
       $scope.noticiasGoiania = data;
    })
    .error(function () {
      console.log('error')
    });		

});