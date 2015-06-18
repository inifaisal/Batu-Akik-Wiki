var app = angular.module('BatuAkik', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'assets/templates/home.html',
			controller : 'listdataCtrl'
		})
		.when('/details/:slug', {
			templateUrl : 'assets/templates/detail.html',
			controller : 'detailCtrl'
		})
		.when('/about', {
			templateUrl : 'assets/templates/about.html',
		})

		.when('/contact', {
			templateUrl : 'assets/templates/contact.html',
		})
		.otherwise({
			redirectTo: '/'
		})
});

app.controller('listdataCtrl',function($scope, $http){
	$scope.batu = [];
	$http.get("assets/batuakik.json").success(function(response){
		$scope.batu = response;
	});
});
app.controller('detailCtrl',function($scope, $http, $routeParams){
	$scope.detail = [];
	var slug = $routeParams.slug;
	$http.get("assets/batuakik.json").success(function(response){

		$scope.detail = findBatu(response, 'slug', slug);
	});

	function findBatu(Search, SearchKey, Searchvalue){
		for (var i = 0; i < Search.length; i++){
			if(Search[i][SearchKey] == Searchvalue){
				return Search[i];
			}
		}
		return null;
	}
});

