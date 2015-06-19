var http = require("http"),
bl = require("bl"),
cs = require("concat-stream");

http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
})