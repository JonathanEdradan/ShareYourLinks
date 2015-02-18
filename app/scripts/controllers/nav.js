'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) { // We included Auth as a dependency for the NavCtrl.
	// Post object that contains a URL and title attributes
	$scope.post = {url: 'http://', title: ''};
	// This allows us to bind both 'Auth.signedIn' and 'Auth.logout' methods from our Auth service to our NavCtrl.
	$scope.signedIn = Auth.signedIn;
	$scope.logout = function() {
		Auth.logout();
		$location.path('/');
	}; 

	// Method (submitPost) on the scope that will save the 'post' object into our FireBase database.
	$scope.submitPost = function () {
		Post.create($scope.post).then(function (ref) {
			// redirects us to the posts page after we submit a post.
			$location.path('/posts/' + ref.name());
			$scope.post = {url: 'http://', title: ''};
		});
	};
});