//configuring Express JS with MongoDB using 'mogodb' module to insert data
const express = require('express');                 //import express
const port = 3300;                                  //port for express
const app = express();                              //initialize express
const MongoClient = require('mongodb').MongoClient; //import mongoclient
const mongourl = 'mongodb://127.0.0.1:27017/' ;     //mongodb url
const col_name = 'userlist';                        //name of collection; to be created if it does not exist
let db;
const bodyParser=require('body-parser');           //import body parser to trap data sent via POST in msg body
app.use(bodyParser.urlencoded({extended:false}));  //add the middleware to express
app.use(bodyParser.json());                        //config middleware to trap json format data 

    app.get ('/',function(req,resp){               // default test route for express 'GET'
                resp.send("API is working");  
     });

     app.post ('/user',function(req,resp){                         // route for express 'POST'
        db.collection(col_name).insert(req.body,(err,result)=>{    //insert data into mongoDB
                 if(err) throw err;
                 resp.send("Data Inserted");  
        });
     });

     //connect to Mongo DB           force usage of latest version of MongoClient 
     MongoClient.connect(mongourl, { useNewUrlParser: true,useUnifiedTopology: true},function (err,client) { 

            if(err) throw err;
            db = client.db('userdata');                    //DB name to be created in MongoDB
                 
            app.listen(port, () => {                       //express is listening
                console.log(`Server running on port ${port}`)
            });
    });

    
   