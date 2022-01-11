const fs= require('fs');

//FILE SYSTEM 

// writeFile() is used to write data to file.
fs.writeFile('hello.txt','This is Anurag',(err) => {
    if(err)throw err;
    else{
        console.log('Data was Written successfully')
    }
})

// appendFile() is used to append data to file.
fs.appendFile('hello.txt',' This is second line.',(err)=>{
    if(err)throw err;
    else console.log("Data Appended successfully.")
})

// readFile() is used to read data from file.
fs.readFile('hello.txt',(err, data)=>{
    if(err)throw err;
    else console.log("Data Read successfully : "+data.toString())
})

// open() is used to open file & r+ is read/write format specifier for file.
fs.open('hello.txt','r+',(err, data) => {
    if(err){
       console.log(err);
    }else{
        console.log("Open and read successfully");
        
    }
});

// unlink() is used to detete file.
fs.unlink('hello.txt',(err)=>{
    if(err)throw err;
    else console.log("Data Deleted/Unlink successfully")
})

//Comment out the unlink method to see the creation of folder 