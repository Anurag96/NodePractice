
const express = require('express');
const app = express(); 

app.get('/', function(req, res){
    
    res.send('Welcome to Query String')
})

app.listen(8090,() => {
    console.log('listening on port 8090')
});