function House() {
	this.id = null;
	this.location = null;
	this.inhabitants = [];
}

House.prototype = {
	addInhabitant: function(person) {
		this.inhabitants.push(person);
	}
};

module.exports = House;