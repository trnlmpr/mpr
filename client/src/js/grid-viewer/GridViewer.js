"use strict";

var $ = require("jquery");
var angular = require("angular");

function gridViewer($compile, $timeout, $window) {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "grid-viewer/grid-viewer.html",		

		controller: "GridViewerController",
		controllerAs: "gridViewer",

		link: function(scope, elem, attrs, ctrl) {			
		}
	};
}

gridViewer.$inject = ["$compile", "$timeout", "$window"];

angular
	.module("mpr-client")
	.directive("gridViewer", gridViewer);