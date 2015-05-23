function main() {
	var that = this;

	var ticks = 0;
	var timeStep = 100;
	var startTime;

	this.init = function() {
		console.log("Simulation started");

		startTime = new Date();
		setInterval(update, timeStep);
	};

	this.getData = function() {
		return {
			ticks: ticks,
			expectedTicks: Math.floor((new Date() - startTime) / timeStep)
		};
	};

	function update() {
		ticks++;
	}
}

module.exports = new main();