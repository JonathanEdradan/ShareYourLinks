'use strict';
// Filter for formatting URLs
// Create an 'a' element, set the href to our URL, and the ask for the 'a' element's hostname.
app.filter('hostnameFromUrl', function () {
	return function (str) {
		var url = document.createElement('a');
		url.href = str;
		return url.hostname;
	}
});