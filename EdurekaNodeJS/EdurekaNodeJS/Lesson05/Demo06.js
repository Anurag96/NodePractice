//configuring Express JS with 'Mongoose' module s an ORM to insert & Read data
const express = require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');    //import body parser to trap data sent via POST in msg body
var user = require('./models/usermodel');   //import custom Schema file

//connection string / collection Name                          use latest version of mongoose
var db=mongoose.connect('mongodb://127.0.0.1:27017/userdata',{ useNewUrlParser: true, useUnifiedTopology: true  });


var app= express();

app.use(bodyParser.urlencoded({extended:false}));  //add the middleware to express
app.use(bodyParser.json());  

var port = 3000;

app.get('/',function(req,resp){                     //default route
   resp.send('Welcome to Mongoose');
});

app.get('/getuser',(req,resp) => {                 //get data from MongoDB via Mongoose
    user.find(function(err,data){
           if(err) {resp.send(err)}
           else resp.json(data);
    });
 });

 app.post('/postuser',(req,resp) => {             //insert data into MongoDB via mongoose
    user.create(req.body,function(err,data){
           if(err) {resp.send(err)}
           else resp.send('Data Inserted!');
    });
 });

app.listen(port,function(){
   console.log("running");
});