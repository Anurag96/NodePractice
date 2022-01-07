var fs=require('fs');

fs.appendFile('mynote.txt','\n This is 2nd Session of NodeJS on fs and expressJS ',function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log('Data Appended successfully !');
    }
});