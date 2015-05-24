var Vector2 = require("../common/math/Vector2");

function Location(x, y) {
	this.gridPosition = new Vector2(x, y);
}

Location.prototype = {
	clone: function() {
		var location = new Location(this.gridPosition.x, this.gridPosition.y);
		return location;
	},
};

module.exports = Location;