// Declare our functionality inside a Javascript module.
module.exports = {

	hello: function (name) {

		if (name === undefined) {
			name = "World";
		}

		return "Hello, " + name + "!";
	}

};
