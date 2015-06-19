var mod = require("./six-module")

mod(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		console.log("there was an error", err)
	}
	data.forEach(function(file){ console.log(file); })
})