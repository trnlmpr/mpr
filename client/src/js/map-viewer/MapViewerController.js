"use strict";

var _ = require("lodash");
var printf = require("printf");
var angular = require("angular");

function MapViewerController($scope, mapRepo) {
	var that = this;

	init();

	function init() {
		getMap();
	}

	function getMap() {
		mapRepo.getMap().success(function(data) {
			that.stuff = data;
		});
	}
}

MapViewerController.$inject = ["$scope", "MapRepository"];

angular
	.module("mpr-client")
	.controller("MapViewerController", MapViewerController);