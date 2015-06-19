var http = require('http')

var url1 = process.argv[2], url2 = process.argv[3], url3 = process.argv[4];

var data1 = "", data2 = "", data3 = "";

var callbackcount = 3

var endFn = function() { 
	callbackcount--; 
	if(callbackcount === 0) {
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}};
http.get(url1, function(res) {
	res.setEncoding("utf8");
	res.on("data", function(data) { data1 += data } );
	res.on("end", endFn )
});

http.get(url2, function(res) {
	res.setEncoding("utf8");
	res.on("data", function(data) { data2 += data } );
	res.on("end", endFn )
});

http.get(url3, function(res) {
	res.setEncoding("utf8");
	res.on("data", function(data) { data3 += data } );
	res.on("end", endFn )
});

