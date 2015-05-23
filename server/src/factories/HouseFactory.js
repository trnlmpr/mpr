var printf = require("printf");

var House = require("../models/House");

function HouseFactory() {
	var that = this;

	var currentId = 0;

	this.getHouse = function(location) {
		currentId++;

		var house = new House();
		house.id = currentId;
		house.location = location;

		return house;
	};
}

module.exports = new HouseFactory();