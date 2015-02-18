'use strict';
// We need to load the specific post for this page. To do this, we'll grab the post's ID from the URL using $routeParams
// and then call the 'get' method from our Post service.
app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.get($routeParams.postId);
});