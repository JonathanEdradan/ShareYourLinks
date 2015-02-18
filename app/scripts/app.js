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
    .when('/register', {
      templateUrl: 'views/register.html',
      controller:  'AuthCtrl',
      // The resolve property is used to define dependencies that needs to be resolved before our controller is instantiated. 
      // In this case, we want to make sure we know the authentication status of the user so we can seamlessly redirect them 
      // to the homepage if they're already logged in. We're also defining a user property that we can inject into our controller.
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});
