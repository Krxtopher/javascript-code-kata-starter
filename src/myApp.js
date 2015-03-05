// Variables or functions declared here will be safely hidden from the rest of
// the application unless you expose them via the module.exports object below.

var multiply = function (a, b) {

    return 6;
};


// Expose your public API via the module.exports object.
module.exports = {

    multiply: multiply

};
