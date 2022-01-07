console.log("The process has begun")

var myDateFunction=(a,b)=>{
    var c=a+b;
    console.log("sum"+c);
  return Date();
}

console.log("The date and time : "+myDateFunction(2,4));

module.exports = myDateFunction;