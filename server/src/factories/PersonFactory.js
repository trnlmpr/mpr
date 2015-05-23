var printf = require("printf");

var Person = require("../models/Person");

function PersonFactory() {
	var that = this;

	var currentId = 0;

	this.getPerson = function(house) {
		currentId++;

		var person = new Person();
		person.id = currentId;
		person.name = printf("Aardvark %s", person.id);
		person.home = house;
		person.location = house.location;

		return person;
	};
}

module.exports = new PersonFactory();