var _ = require("lodash");

var simulation = require("../models/Simulation");

function GridController() {
	var grid = simulation.grid;

	this.getGridData = function() {
		var data = {};

		data.persons = grid.persons.map(function(person) {
			return {
				id: person.id,
				name: person.name,
				homeId: person.home ? person.home.id : null,
				location: person.location,
			};
		});

		data.houses = grid.houses.map(function(house) {
			return {
				id: house.id,
				location: house.location,
				inhabitantIds: house.inhabitants.map(function(inhabitant) {
					return inhabitant.id;
				})
			};
		});

		return data;
	};
}

module.exports = new GridController();