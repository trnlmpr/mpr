var Location = require("./Location");
var Grid = require("./Grid");

var UPDATE_INTERVAL = 100;

function Simulation() {
	var that = this;

	init();

	function init() {
		that.time = 0;

		that.grid = new Grid();
		that.grid.addHouse(new Location(1, 1));

		setInterval(update, UPDATE_INTERVAL);
	}

	function update() {
		that.time++;
		that.grid.update();
	};
}

module.exports = new Simulation();