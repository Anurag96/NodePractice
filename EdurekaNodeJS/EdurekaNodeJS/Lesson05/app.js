var express=require('express');
var app=express();
const port=3000;

var birds = require('./birds');   //calls the speerate file that defines routes 

app.use(birds);          //use the seperate custom router file

app.listen(port,() => {
   console.log('App running on ' + port);
});