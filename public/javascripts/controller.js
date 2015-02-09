var noticiasApp = angular.module('noticiasApp',[]);

noticiasApp.controller('NoticiasController', function ($scope,$http) {
	var routeOfNoticias = '/noticias';	
	 $http.get(routeOfNoticias)
    .success(function(data){
       $scope.noticias = data;
    })
    .error(function () {
      console.log('error')
    });
});