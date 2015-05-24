"use strict";

var $ = require("jquery");
var angular = require("angular");

var CELL_SIZE = 64;

function gridViewer($compile, $timeout, $window) {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "grid-viewer/grid-viewer.html",
		scope: {},

		controller: "GridViewerController",
		controllerAs: "gridViewer",

		link: function(scope, elem, attrs, ctrl) {
			ctrl.directive = {				
				onGetGridData: function(data) {
					scope.gridData = data;

					scope.gridData.persons.forEach(function(person) {
						person.style = { 
							left: CELL_SIZE * person.location.gridPosition.x + "px",
							top: CELL_SIZE * person.location.gridPosition.y + "px",
						};
					});

					scope.gridData.houses.forEach(function(house) {
						house.style = { 
							left: CELL_SIZE * house.location.gridPosition.x + "px",
							top: CELL_SIZE * house.location.gridPosition.y + "px",
						};
					});
				}
			};
		}
	};
}

gridViewer.$inject = ["$compile", "$timeout", "$window"];

angular
	.module("mpr-client")
	.directive("gridViewer", gridViewer);