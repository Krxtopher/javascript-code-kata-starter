"use strict";

// These tests use the "expect"-style syntax provided by Chai.
// For usage documentation see: http://chaijs.com/api/bdd/
var expect = chai.expect;

describe("sample module Tests", function() {

	// Pull in the module we want to test.
	var myModule = require("../../src/sample");

	describe("the hello() method", function() {

		it("should return the default greeting when no parameters are passed", function() {
			
			var result = myModule.hello();
			expect(result).to.equal("Hello, World!");
		});

		it("greets that person by name when a name value is passed", function() {
				
			var result = myModule.hello("Kris");
			expect(result).to.equal("Hello, Kris!");
		});
	});
});