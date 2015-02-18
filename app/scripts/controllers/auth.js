'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth, user) { 
// Here, we inject 'user' from the the resolve property in our app.config.
	// If the user is already logged in, automatically redirect them to root.
	if (user) {
		$location.path('/');
	}
	// Afterwards, we set up a register method that takes a user object from the $scope and sends it to Auth.register. 
	// We call 'Auth.login' on our user object after registration is successful in order to log in the user we created. 
	// If that succeeds, we can then redirect them to the homepage.
	$scope.register = function() {
		return Auth.login($scope.user).then(function() {
			$location.path('/');
		});
	};
});