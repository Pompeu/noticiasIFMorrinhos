
angular.module('noticiasApp',[])
	.controller('NoticiasController', ['$scope','$http', function ($scope ,$http) {
		var routeOfNoticias = '/noticias';	
		 $http.get(routeOfNoticias)
		    .success(function(data){
		       $scope.noticias = data;
	    })
	    .error(function () {
	      console.log('error');
	    });
	}]);
