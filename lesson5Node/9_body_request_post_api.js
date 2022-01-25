const express = require('express');
const server = express();
const bodyParser=require('body-parser');           //import body parser to trap data sent via POST in msg body

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false}));

//GET data by QUERY STRING
// http://localhost:8050/person2?name=anurag&age=26&mail=a@gmail.com
server.get('/person2', (req, res)=>{
    let personName = req.query.name;
    let personAge = req.query.age;
    let personMail = req.query.mail;
    res.json({name:personName, age:personAge, mail:personMail});
    console.log('DATA Fetched by QUERY STRING');
})

//GET data by QUERY PARAM
// http://localhost:8050/person/anurag/a@gmail.com/26
server.get('/person/:name/:mail/:age', (req, res)=>{
    res.send('Welcome '+req.params.name+' your email is '+req.params.mail+' and your age is '+req.params.age+' Welcome GET request made successfully on Request Params');
    console.log('DATA Fetched by QUERY PARAM');
})

//POST data by BODY PASER
// http://localhost:8050/person || SEND the DATA either from URLEncoded or JSON, through POSTMAN
server.post('/person',(req, res)=>{
        res.send('Welcome '+req.body.name+' your email is '+req.body.mail+' and your age is '+req.body.age+' Welcome POST request made successfully with Request Body');
    console.log('Data POST sent')
})



server.listen(8050,(err)=>{
    if(err) throw err;
    else{
        console.log('listening on port 8050');
    }
});