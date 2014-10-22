//Please contact the HR in case of a solution
var a = 10;

function f(){
	this.a = 25;
}

var x = {};
var output_one = undefined;		//__ means fill it here
claim(x.a,output_one);		//This should return true

x.f = f;
var output_two = undefined;
claim(x.a,output_two);

x.f();
var output_three = 25;
claim(x.a,output_three);

f();
var output_four = 25;
claim(x.a,output_four);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	output_one: output_one,
	output_two: output_two,
	output_three: output_three,
	output_four: output_four
}