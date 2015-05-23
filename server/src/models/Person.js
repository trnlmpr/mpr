function Person() {
	this.id = null;
	this.name = null;
	this.home = null;
	this.location = null;
}

Person.prototype = {
	update: function() {
	},
};

module.exports = Person;