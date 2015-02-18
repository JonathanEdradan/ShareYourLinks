'use strict';

app.controller('NavCtrl', function ($scope, $location, Post) {
	// Post object that contains a URL and title attributes
	$scope.post = {url: 'http://', title: ''};
	// Method (submitPost) on the scope that will save the 'post' object into our FireBase database.
	$scope.submitPost = function () {
		Post.create($scope.post).then(function (ref) {
			// redirects us to the posts page after we submit a post.
			$location.path('/posts/' + ref.name());
			$scope.post = {url: 'http://', title: ''};
		});
	};
});