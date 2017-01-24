futbol.factory('Articles', ['$http', function($http){
	var url = 'https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=5058089d6b914da0b97f39d0ee5dc876';

	return $http.get(url);
}]);