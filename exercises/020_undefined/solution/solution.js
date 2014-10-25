var x = {};

claim(x.a==undefined,true);

claim(x.a=='undefined',false);		//because undefined can't be cast to a string or anything

x.a=undefined;

claim(x.a==undefined,true);

claim(x.a=='undefined',false);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	
}
