var printf = require("printf");

var personFactory = require("../factories/PersonFactory");
var houseFactory = require("../factories/HouseFactory");

function Grid() {
	this.persons = [];
	this.houses = [];	
}

Grid.prototype = {
	update: function() {
		this.persons.forEach(function(person) { person.update(); });
	},

	addHouse: function(location) {
		var house = houseFactory.getHouse(location);

		var person = personFactory.getPerson(house);
		house.addInhabitant(person);

		this.persons.push(person);
		this.houses.push(house);
	},
};

module.exports = Grid;