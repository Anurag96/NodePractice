var fs=require('fs');

fs.unlink('mynote.txt',function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log('file Deleted  successfully !');
    }
});