var express = require("express");
var simulation = require("./models/Simulation");

var app = express();
var server;

initCors();
initRoutes();
initServer();

function initCors() {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
}

function initRoutes() {
	var index = require("./routes/");
	var grid = require("./routes/grid");

	app.use("/", index);
	app.use("/grid", grid);
}

function initServer() {
	server = app.listen(3000, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log("Server listening at http://%s:%s", host, port);
	});
}