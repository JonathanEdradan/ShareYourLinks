'use strict';
/* global app:true */
/* exported app */

// PostsCtrl which will be injected by our posts views found in ./views/posts.html
app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all; // New URLs that have been entered in our form will be stored in this empty array that will hold our posts.  
	// $scope.post = {url: 'http://', title: ''}; // Post object that contains a URL and title attributes
	
	// To remove posts stored in the array, we can pass the index of the object to a scope method(deletePost).
	// This is a callback in our delete method.  This will allow our view page to reflect the changes.
	$scope.deletePost = function (post) {
		Post.delete(post);
	};
});