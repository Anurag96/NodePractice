const express = require('express');                  //import express
const MongoClient = require('mongodb').MongoClient;  //import mongoclient
const port = 3300;                                  //port for express
const app = express();                              //initialize express
const mongourl = 'mongodb://127.0.0.1:27017/' ;     //mongodb url

MongoClient.connect(mongourl, { useNewUrlParser: true },(err,client) => { //connect to Mongo DB
    if(err) throw err;
    db = client.db('classdatabase');                          //DB name in MongoDB
    const collection_name = db.collection('item');            //collection name in the mongo DB
    
    app.get ('/',function(req,resp){                          //default route for express
        collection_name.find( {item: "sharpener"} ).toArray(function (err,res){    //find an item  record
            if(err){
                console.log(err);
            } else if (res.length){
                console.log('Found: ', res); 
                resp.send(res);  
            } else {
                resp.send("<h1>Error!</h1>");  
            }
            client.close();                                 //close connection
        });
    });
    
    app.listen(port, () => {                               //express is listening
        console.log(`Server running on port ${port}`)
    });
});