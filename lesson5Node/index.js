const express = require('express');
const server = express(); // Here express is initialized 

server.use(express.static('public'));

server.listen(8088,function(){
    console.log('listening on port 8088')
});