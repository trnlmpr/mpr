"use strict";

var angular = require("angular");

function MapRepository($http) {
	this.getMap = function() {
		return $http({
			url: "http://localhost:3000/map"
		});
	};
}

MapRepository.$inject = ["$http"];

angular
	.module("mpr-client")
	.service("MapRepository", MapRepository);