const http = require('http');

http.createServer((req,res)=>{
res.write('Hello World')
res.end()
}).listen(8080,(err)=>{
    if(err){
        throw err
    }else{
        console.log('Port is running on 8080')
    }
})