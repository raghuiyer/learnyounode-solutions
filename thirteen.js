var http = require("http");
var url = require("url");
var parsePath = "/api/parsetime";
var unixpath = "/api/unixtime";

var portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'COntent-Type' : 'application/json'});
	var pathObj = url.parse(req.url, true);
	var iso = pathObj.query['iso'];
    var date = new Date(iso);
	if(pathObj.pathname === parsePath) {
      var formattedJSON = {"hour" : date.getHours(), "minute" : date.getMinutes(), "second": date.getSeconds()};
      res.end(JSON.stringify(formattedJSON))
	}

	if(pathObj.pathname === unixpath) {
		res.end(JSON.stringify({"unixtime" : date.getTime()}))
	}
});

server.listen(portNumber);
