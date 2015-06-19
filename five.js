var fs = require('fs');

var path = require('path');

var extension = "." + process.argv[3]

fs.readdir(process.argv[2], function(err, files){
	if(err) throw err

	files.filter(function(file) {		
		return path.extname(file) === extension
	}).forEach(function(file){
	    console.log(file)	
	})
})