var futbolnews = angular.module('futbol-news', ['ngResource', 'ngSanitize', 'duScroll']);
futbolnews.run(function($rootScope) {
    if(!window.history || !history.replaceState) {
      return;
    }
    $rootScope.loaded = false;
});