function delay(seconds,callback){
   setTimeout(callback,seconds*1000);
}
console.log("Starts delaying");
delay(2, (error) => {
     if(error) {callback(error);}
     else{
        console.log('2 seconds delay');
        delay(1, (error) => {
            if(error) {callback(error);}
            else{
                console.log('3 seconds delay');
                delay(1, () => {
                    if(error) {callback(error);}
                    else{
                         console.log('4 seconds delay');
                    }
                });
            }
        });
    }
});