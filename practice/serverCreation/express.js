const express = require('express')
const  app = express()

app.get('/',(req,res)=>{
    res.send('Hello Anurag, to Express')
})

app.listen(8080,()=>{

    console.log('Port running on 8080')
})