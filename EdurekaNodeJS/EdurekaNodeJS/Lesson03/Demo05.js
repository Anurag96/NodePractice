sum =(a,b,callback) => {
    callback(a+b);
}

sum(4,5,(result) => {
     console.log("Result: "+ result);
});

sum(3,8,(result) => {
  console.log("Result : " + result);
});