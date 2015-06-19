var net = require("net");

var server = net.createServer(function(socket) {
  var date = new Date()
  var month = date.getMonth() + 1;
  var hours = date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
  var formattedDate = "" + date.getFullYear() + "-" + (month < 10 ? "0" : "") + month + "-" + date.getDate() + " " + hours + ":" + date.getMinutes();
  socket.write(formattedDate);
  socket.end("");
});

server.listen(process.argv[2]);

