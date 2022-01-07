//var

var x=10;
function test(){
   var x=100;
   console.log("Value of x as per defined function " + x);
}

 console.log("Value of x before declaration of the function  " + x);
 
 
 test();
 
 console.log("Value of x after declaration of the function  " + x);
