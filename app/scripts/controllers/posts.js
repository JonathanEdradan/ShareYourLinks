'use strict';
/* global app:true */
/* exported app */

// PostsCtrl which will be injected by our posts views found in ./views/posts.html
app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all; // New URLs that have been entered in our form will be stored in this empty array that will hold our posts.  
	$scope.post = {url: 'http://', title: ''}; // Post object that contains a URL and title attributes
	// Method (submitPost) on the scope that will save the 'post' object into our FireBase database.
	$scope.submitPost = function () {
		Post.create($scope.post).then(function (ref) {  // Sends a 'POST' request to our posts endpoint and saves our post object.
			$location.path('/posts/' + ref.name());
		});  
	};
	// To remove posts stored in the array, we can pass the index of the object to a scope method(deletePost).
	// This is a callback in our delete method.  This will allow our view page to reflect the changes.
	$scope.deletePost = function (post) {
		Post.delete(post);
	};
});