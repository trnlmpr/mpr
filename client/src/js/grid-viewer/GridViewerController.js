"use strict";

var _ = require("lodash");
var printf = require("printf");
var angular = require("angular");

function GridViewerController($scope, gridRepo) {
	var that = this;

	init();

	function init() {
		setInterval(getGrid, 1000);
	}

	function getGrid() {
		gridRepo.getGrid().success(function(data) {
			that.stuff = data;
		});
	}
}

GridViewerController.$inject = ["$scope", "GridRepository"];

angular
	.module("mpr-client")
	.controller("GridViewerController", GridViewerController);