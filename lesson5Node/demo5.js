
const express = require('express');
const app = express(); 

app.get('/', function(req, res){
    
    res.json({text:"Hello World"});
})

app.listen(8090,() => {
    console.log('listening on port 8090')
});