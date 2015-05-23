function Vector2(x, y) {
	this.x = x;
	this.y = y;
}

Vector2.prototype = {
	add: function(v) {
		this.x += v.x;
		this.y += v.y;

		return this;
	},

	sub: function(v) {
		this.x -= v.x;
		this.y -= v.y;

		return this;
	},

	multiplyScalar: function(n) {
		this.x *= n;
		this.y *= n;

		return this;
	},

	copy: function(v) {
		this.x = v.x;
		this.y = v.y;

		return this;
	},

	clone: function() {
		return new Vector2(this.x, this.y);
	},
};

module.exports = Vector2;