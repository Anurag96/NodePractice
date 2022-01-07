var promise = new Promise ((resolve , reject) => {
    reject('Failure!');
}).then(value => {
      console.log(value);  
   }).catch(value => {
          console.log(value);
     });
