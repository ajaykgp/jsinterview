var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var output_one    = userMod.output_one;
	var output_two    = userMod.output_two;
	var output_three   = userMod.output_three;
	var output_four   = userMod.output_four;

	it('exports a output_one variable', function () {
		assert.isTrue('output_one' in userMod);
	});
	it('exports a output_two variable', function () {
		assert.isTrue('output_two' in userMod);
	});
	it('exports a output_three variable', function () {
		assert.isDefined(output_three);
	});
	it('exports a output_four variable', function () {
		assert.isDefined(output_four);
	});

	it('output_one is undefined', function () {
		assert.isTrue(output_one === undefined);
	});
	it('output_two is undefined', function () {
		assert.isTrue(output_two === undefined);
	});
	it('output_three is 25', function () {
		assert.isTrue(output_three === 25);
	});
	it('output_four is 25', function () {
		assert.isTrue(output_four === 25);
	});

	if (errors.length) {
		verifyCallback(null, false);
	} else {
		verifyCallback(null, true);
	}

}

module.exports = verify;
