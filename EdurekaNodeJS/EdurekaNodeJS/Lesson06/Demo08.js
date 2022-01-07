//set objects

var x = new Set();

x.add(0);
x.add(3);
x.add(3);  //ignores duplicate values


var y={a:7 , b:8};

x.add(y);

console.log(x);
