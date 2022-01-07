var promise = new Promise ((resolve , reject) => {
    throw new Error('Some error has occured!')
}).then(function(successMessage){
      console.log(successMessage);  
   }).catch(function(errorMessage) {
          console.log('Catch Method is invoked'); 
          console.log(errorMessage);
     });
