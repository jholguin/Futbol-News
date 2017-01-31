futbolnews.controller('NewsCtrl',['$scope', 'News', '$rootScope', function($scope, News, $rootScope){
	$scope.title = "News";
	$scope.feed = "";
	$scope.loaded = false;



	//Get all new feed articles
	News.get(function(data){
		$scope.feed = data;
		$scope.loaded = true;
	});

	//Get angular element for feed title
	var feedTitles = angular.element(document.querySelector('.feed-titles')); 

	//Add listener to when an article becomes actives to update has in url and scroll to article in the feed container
	$rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
  		
      	var hash = $element.prop('hash');
      	if (hash) {
        	history.replaceState(null, null, hash);
      	}

      	feedTitles.scrollToElementAnimated($element.parent());
    });


}]);