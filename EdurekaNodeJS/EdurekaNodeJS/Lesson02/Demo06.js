var fs=require('fs');

fs.writeFile('mytext.txt','This is second Node.js class',function(err){
    if(err){
        return console.error(err);
    }else{
        console.log("Data Written sucessfully!");
    }
});