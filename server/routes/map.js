var express = require("express");
var simulation = require("../simulation");

var router = express.Router();

router.get("/", function(req, res, next) {
	var data = simulation.getData();
	res.json(data);
});

module.exports = router;