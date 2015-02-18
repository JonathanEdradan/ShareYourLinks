'use strict';
// PostsCtrl which will be injected by our posts views found in ./views/posts.html
app.controller('PostsCtrl', function ($scope) {
	$scope.posts = []; // New URLs that have been entered in our form will be stored in this empty array that will hold our posts.  
	$scope.post = {url: 'http://', title: ''}; // Post object that contains a URL and title attributes
	// Method on the scope that will the 'post' object into the 'posts' array. Will also reset the 'post' object when this happens
	$scope.submitPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http//:', title: ''};
	};
	// To remove posts stored in the array, we can pass the index of the object to a scope method.
	// This method will splice the object out of our posts array.
	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
	};
});