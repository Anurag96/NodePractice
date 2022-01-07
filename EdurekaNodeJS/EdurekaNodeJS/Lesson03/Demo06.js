function delay(seconds,callback){
   setTimeout(callback,seconds*1000);
}

console.log("Starts delaying");

delay(2, () => {
     console.log('2 seconds delay');
     delay(1, () => {
         console.log('3 seconds delay');
         delay(1, () => {
               console.log('4 seconds delay');
         });
     });
});