var promise = new Promise ((resolve , reject) => {
    resolve('Success!');
}).then(value => {
      console.log(value);  
   },
   function(errorMessage){
       console.log(errorMessage);
   });
