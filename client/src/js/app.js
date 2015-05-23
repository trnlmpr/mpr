"use strict";

var angular = require("angular");

var app = angular.module("mpr-client", []);

app.config(function() {
});

app.run(function($rootScope, $http) {
	$rootScope.stuff = "mpr-client";

	$http({
		url: "http://localhost:3000/",
	}).success(function(data) {
		$rootScope.stuff = data;
	});
});