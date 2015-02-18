'use strict';

/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name shareyourlinksApp
 * @description
 * # shareyourlinksApp
 *
 * Main module of the application.
 */
var app = angular.module('shareyourlinksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
]);
// constant used for our firbase url.  We will need this to inject it into our services or controllers.
app.constant('FIREBASE_URL', 'https://shareyourlinks.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller:  'PostsCtrl'
    })
    .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller:  'PostViewCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
