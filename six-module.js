var fs = require("fs"),
path = require("path");

module.exports = function fileExtensionReader(dirName, ext, callback) {
  fs.readdir(dirName, function(err, files) {
  	if(err) {
  		callback(err);
  	} else {
  		var f = files.filter(function(file) {
  			return path.extname(file) === "." + ext
  		});
  		callback(null, f);
  	}

  })  
}