var gridCtrl = require("../controllers/GridController");

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	var data = gridCtrl.getGridData();
	res.json(data);
});

module.exports = router;