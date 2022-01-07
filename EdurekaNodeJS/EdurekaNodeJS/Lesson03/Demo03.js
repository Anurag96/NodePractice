var fs = require('fs');

var data= fs.readFileSync('info.txt');

console.log(data.toString());

console.log("Program Ended");