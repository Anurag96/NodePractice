var fs=require('fs');

fs.open('mytext.txt','r+',function(err,fd){
   if(err){
       console.log(err);
   }else{
       console.log('File Opened successfully');
   }
});