//configuring Express JS
const express = require('express');                  //import express
const port = 3300;                                  //port for express
const app = express();                              //initialize express

    app.get ('/',function(req,resp){               //default route for express
                resp.send("API is working");  
     });
    
    app.listen(port, () => {                       //express is listening
        console.log(`Server running on port ${port}`)
    });
