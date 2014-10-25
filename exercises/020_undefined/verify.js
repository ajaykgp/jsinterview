var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	if (errors.length) {
		verifyCallback(null, false);
	} else {
		verifyCallback(null, true);
	}
}

module.exports = verify;
