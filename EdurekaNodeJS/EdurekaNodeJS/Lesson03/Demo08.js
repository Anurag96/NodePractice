var promise = new Promise (function(resolve , reject){
     const a="NodeJs";
     const b="NodeJs";

     if(a==b){
         resolve();
     }
     else{
         reject();
     }
})
.then(function(){
      console.log("the Strings are the same");
})
.catch(function() {
       console.log('Some error has occured!');
});