'use strict';

app.controller('SessionsCtrl', function($scope, $location, Auth) {
	$scope.user = {};

	$scope.login = function() {
		Auth.login($scope.user).then(function() {
			$location.path('/');
		});
	};
});
