var port = process.argv[2];
var filename = process.argv[3];

var fs = require("fs");

var r = fs.createReadStream(filename);

var http = require("http");
var server = http.createServer(function(request, response){
  response.writeHead(200, {'content-type' : 'text-plain'});
  r.pipe(response);
});

server.listen(port);