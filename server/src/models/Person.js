function Person() {
	this.id = null;
	this.name = null;
	this.home = null;
	this.location = null;

	this.step = 0;
}

Person.prototype = {
	update: function() {
		if (this.step < 2) {
			this.location.gridPosition.x++;
		} else
		if (this.step >= 2 && this.step < 4) {
			this.location.gridPosition.y++;
		} else
		if (this.step >= 4 && this.step < 6) {
			this.location.gridPosition.x--;
		} else
		if (this.step >= 6 && this.step < 8) {
			this.location.gridPosition.y--;
		}

		this.step++;
		if (this.step >= 8) {
			this.step = 0;
		}
	},
};

module.exports = Person;