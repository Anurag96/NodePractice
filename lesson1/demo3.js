const path = require('path');

var p ="E:/Node_practice/app.txt"

console.log(path.dirname(p)); //Gives the directory path of the folder
console.log(path.basename(p)); // Gets the basename of the folder
console.log(path.extname(p)); //extension of file
console.log(path.isAbsolute(p)); //checks if the path is absolute