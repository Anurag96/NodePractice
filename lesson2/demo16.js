const express = require('express')
const app = express()
const port =8750

app.get('/', (req, res) =>{
    res.send('<h1>Welcome to express!</h1>')
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('listening on port 8750')
})

