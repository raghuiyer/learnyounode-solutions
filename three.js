var fs = require('fs');

var fileName = process.argv[2]

var buf = fs.readFileSync(fileName)

var str = buf.toString();

console.log(str.split("\n").length - 1)