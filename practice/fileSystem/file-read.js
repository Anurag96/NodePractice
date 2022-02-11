const fs = require('fs');
const data={
    "name":"Enter your name",
    "age":"Enter your age"
}
const newData={
    "email":"Enter your email",
    "address":"Enter your address"
}
fs.writeFile('content.txt',JSON.stringify(data),(err)=>{
    if(err){
        throw err
    }else{
        console.log('Data Written successfully')
    }
})
fs.appendFile('content.txt',JSON.stringify(newData),(err)=>{
    if(err){
        throw err
    }else{
        console.log('Data appended successfully')
    }  
})
fs.readFile("content.txt",(err,data)=>{
    if(err){
        throw err
    }else{
        console.log(data.toString())
        console.log('Data read successfully')
    }
})
fs.unlinkSync("content.txt",(err)=>{
    if(err){
        throw err
    }else{
        console.log(data.toString())
       
    } 
})

 
