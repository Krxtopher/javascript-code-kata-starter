;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Declare our functionality inside a Javascript module.
module.exports = {

	hello: function (name) {

		if (name === undefined) {
			name = "World";
		}

		return "Hello, " + name + "!";
	}

};

},{}],2:[function(require,module,exports){
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
},{"../../src/sample":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NodWx0ei9Eb2N1bWVudHMvVGVtcCBFeHBlcmltZW50cy9KYXZhc2NyaXB0IFNpbXBsZSBUREQgVGVtcGxhdGUvc3JjL3NhbXBsZS5qcyIsIi9Vc2Vycy9rc2NodWx0ei9Eb2N1bWVudHMvVGVtcCBFeHBlcmltZW50cy9KYXZhc2NyaXB0IFNpbXBsZSBUREQgVGVtcGxhdGUvdGVzdC9zcGVjcy9zYW1wbGUuc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIG91ciBmdW5jdGlvbmFsaXR5IGluc2lkZSBhIEphdmFzY3JpcHQgbW9kdWxlLlxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0aGVsbG86IGZ1bmN0aW9uIChuYW1lKSB7XG5cblx0XHRpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuYW1lID0gXCJXb3JsZFwiO1xuXHRcdH1cblxuXHRcdHJldHVybiBcIkhlbGxvLCBcIiArIG5hbWUgKyBcIiFcIjtcblx0fVxuXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFRoZXNlIHRlc3RzIHVzZSB0aGUgXCJleHBlY3RcIi1zdHlsZSBzeW50YXggcHJvdmlkZWQgYnkgQ2hhaS5cbi8vIEZvciB1c2FnZSBkb2N1bWVudGF0aW9uIHNlZTogaHR0cDovL2NoYWlqcy5jb20vYXBpL2JkZC9cbnZhciBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVzY3JpYmUoXCJzYW1wbGUgbW9kdWxlIFRlc3RzXCIsIGZ1bmN0aW9uKCkge1xuXG5cdC8vIFB1bGwgaW4gdGhlIG1vZHVsZSB3ZSB3YW50IHRvIHRlc3QuXG5cdHZhciBteU1vZHVsZSA9IHJlcXVpcmUoXCIuLi8uLi9zcmMvc2FtcGxlXCIpO1xuXG5cdGRlc2NyaWJlKFwidGhlIGhlbGxvKCkgbWV0aG9kXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0aXQoXCJzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IGdyZWV0aW5nIHdoZW4gbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHR2YXIgcmVzdWx0ID0gbXlNb2R1bGUuaGVsbG8oKTtcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvLmVxdWFsKFwiSGVsbG8sIFdvcmxkIVwiKTtcblx0XHR9KTtcblxuXHRcdGl0KFwiZ3JlZXRzIHRoYXQgcGVyc29uIGJ5IG5hbWUgd2hlbiBhIG5hbWUgdmFsdWUgaXMgcGFzc2VkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcblx0XHRcdHZhciByZXN1bHQgPSBteU1vZHVsZS5oZWxsbyhcIktyaXNcIik7XG5cdFx0XHRleHBlY3QocmVzdWx0KS50by5lcXVhbChcIkhlbGxvLCBLcmlzIVwiKTtcblx0XHR9KTtcblx0fSk7XG59KTsiXX0=
;