futbol.controller("NewsController",['$scope', 'Articles', function($scope, Articles){
	$scope.articles = [];

	Articles.then(function(data){
		console.log(data.data.articles);
		$scope.articles = data.data.articles;
	});
}]);