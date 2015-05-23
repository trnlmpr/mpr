"use strict";

var $ = require("jquery");
var angular = require("angular");

function mapViewer($compile, $timeout, $window) {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "map-viewer/map-viewer.html",		

		controller: "MapViewerController",
		controllerAs: "mapViewer",

		link: function(scope, elem, attrs) {
		}
	};
}

mapViewer.$inject = ["$compile", "$timeout", "$window"];

angular
	.module("mpr-client")
	.directive("mapViewer", mapViewer);