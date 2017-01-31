describe('News Factory', function(){
	var articles;

	var articleList = {
		"status": "ok",
		"source": "the-next-web",
		"sortBy": "latest",
		"articles": [
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			},
			{
				"author": "Bryan Clark",
				"title": "Facebook tweaks News Feed to show more 'authentic' and 'timely' stories",
				"description": "Facebook today announced changes to the News Feed to better display relevant stories. As part of the change, Facebook is rolling out new signals to “better identify and rank authentic content” as well as a new real-time prediction algorithm to spot stories faster that might be relevant to you. First, Facebook new signals taps one of its core …",
				"url": "https://thenextweb.com/facebook/2017/01/31/facebook-tweaks-news-feed-show-authentic-timely-stories/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/image_uploaded_from_ios.jpg",
				"publishedAt": "2017-01-31T20:45:09Z"
			}
		]
	};

	beforeEach(angular.mock.module('futbol-news'));

	beforeEach(inject(function(_News_) {
    	articles = _News_;
  	}));

 	it('Get all articles', function() {
 		articles.get(function(data){
			expect().toEqual(articleList);
 		});
  	});
})