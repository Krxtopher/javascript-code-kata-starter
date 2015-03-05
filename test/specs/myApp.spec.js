/* global chai, describe, it */
/* jshint quotmark: single */

'use strict';

// These tests use the "expect"-style syntax provided by Chai.
// For usage documentation see: http://chaijs.com/api/bdd/
var expect = chai.expect;


// Pull in the module we want to test.
var myApp = require('../../src/myApp');

describe('the multiply() method', function () {

	it('should return 6 when given 2 x 3', function () {
		
		var result = myApp.multiply(2, 3);
		expect(result).to.equal(6);
	});

	// Add other it() tests here...

});