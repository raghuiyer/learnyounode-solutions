var sum = 0;
var numargs =  process.argv.slice(2);

for(var i=0,l= numargs.length; i < l; i++) {
	sum += parseInt( numargs[i], 10);
}

console.log(sum);