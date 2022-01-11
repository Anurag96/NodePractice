const fs = require('fs');


fs.writeFile('myfile1.txt','This is node file that is being read .',(err)=>{
    
    if(err){
        console.error(err);
     }else{
         console.log(" Data written successfully");
     }

});


fs.readFile('myfile1.txt',(err, data)=>{
    if(err){
        console.error(err);
     }else{
         console.log("Read data from file successfully : "+data.toString());

     }
});

fs.appendFile('myfile1.txt',' \n This is a second file',(err, data)=>{
    if(err){
        console.error(err);
     }else{
         console.log("Appended successfully");

     }
});

fs.open('myfile1.txt','r+',(err, data) => {
    if(err){
       console.log(err);
    }else{
        console.log("Open and read successfully");
        
    }
});

fs.stat('myfile1.txt','r+',(err, stats) =>{
    if(err){
        console.error(err);
     }else{
        //  console.log(stats);
         console.log("Read stats successfully");
     }
});

