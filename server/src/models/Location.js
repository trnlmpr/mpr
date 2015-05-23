var Vector2 = require("../common/math/Vector2");

function Location(x, y) {
	this.gridPosition = new Vector2(x, y);
}

Location.prototype = {
};

module.exports = Location;