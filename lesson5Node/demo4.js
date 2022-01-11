const express = require('express');
const server = express(); // Here express is initialized 

server.get("/hello", function(req, res){
    res.send('Hello, world')
})

server.listen(8090,() => {
    console.log('listening on port 8090')
});