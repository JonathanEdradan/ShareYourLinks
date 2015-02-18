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
var app = angular
  .module('shareyourlinksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      });
  });
