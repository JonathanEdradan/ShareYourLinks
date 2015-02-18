'use strict';
/* global app:true */
/* exported app */

// Service called 'Post' that will allow us to perform CRUD operations on posts.
// This indicates that there is a root object called 'posts' on our server that we want to open a connection to.
app.factory('Post', function ($firebase, FIREBASE_URL) { 
	var ref = new Firebase(FIREBASE_URL);
	var posts = $firebase(ref.child('posts')).$asArray();
	// Methods for our service to return to help us actually manipulate the data at this location.
	var Post = {
		all: posts,
		create: function (post) {
			return posts.$add(post);
		},
		get: function (postId) {
			return $firebase(ref.child('posts').child(postId)).$asObject();
		},
		delete: function (post) {
			return posts.$remove(post);
		}
	};
	return Post;
});