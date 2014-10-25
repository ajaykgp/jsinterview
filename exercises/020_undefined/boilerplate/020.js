var x = {};

claim(x.a==undefined,__);

claim(x.a=='undefined',__);

x.a=undefined;

claim(x.a==undefined,__);

claim(x.a=='undefined',__);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
