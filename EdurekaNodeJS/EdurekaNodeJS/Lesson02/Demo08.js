var fs=require('fs');

fs.rename('mytext.txt','mynote.txt',function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log('File renamed successfully !');
    }
});