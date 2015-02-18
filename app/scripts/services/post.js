'use strict';
/* global app:true */
/* exported app */

// Service called 'Post' that will allow us to perform CRUD operations on posts.
app.factory('Post', function ($resource) {
	return $resource('https://shareyourlinks.firebaseio.com/posts/:id.json');
});