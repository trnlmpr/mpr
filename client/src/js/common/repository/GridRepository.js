"use strict";

var angular = require("angular");

function GridRepository($http) {
	this.getGrid = function() {
		return $http({
			url: "http://localhost:3000/grid"
		});
	};
}

GridRepository.$inject = ["$http"];

angular
	.module("mpr-client")
	.service("GridRepository", GridRepository);