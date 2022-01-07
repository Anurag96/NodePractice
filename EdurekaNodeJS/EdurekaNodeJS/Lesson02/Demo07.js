var fs=require('fs');

fs.readFile('mytext.txt',function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log(data.toString());
    }
});