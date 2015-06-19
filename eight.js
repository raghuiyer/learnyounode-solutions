var http = require('http');
var allData = ""
http.get(process.argv[2], function(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) { allData += data; } )

	response.on("error", console.error);

	response.on("end", function(a,b,c) {
		console.log(allData.length);
		console.log(allData);
	})
})