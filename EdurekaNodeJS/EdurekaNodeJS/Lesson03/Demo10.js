var promise = new Promise ((resolve , reject) => {
    reject('Rejected!');
}).then(value => {
      console.log(value);  
   },
   function(errorMessage){
       console.log(errorMessage);
   });
