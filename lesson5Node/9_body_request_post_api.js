const express = require('express');
const server = express();
const bodyParser=require('body-parser');           //import body parser to trap data sent via POST in msg body

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false}));

server.post('/person',(req, res)=>{
        res.send('Welcome '+req.body.name+' your email is '+req.body.mail+' and your age is '+req.body.age+' Welcome POST request made successfully with Request Body');
    console.log('Data POST sent')
})

server.get('/person', (req, res)=>{
    res.send('Welcome '+req.body.name+' your email is '+req.body.mail+' and your age is '+req.body.age+' Welcome GET request made successfully on Request Body');
})

server.get('/person', (req, res)=>{
    res.send('Welcome '+req.query.name+' your email is '+req.query.mail+' and your age is '+req.query.age+' Welcome GET request made successfully on Request Query');
    let name = req.query.name;
    let age = req.query.age;
    let mail = req.query.mail;
    res.json({})
})
server.get('/person/:name/:mail/:age', (req, res)=>{
    res.send('Welcome '+req.params.name+' your email is '+req.params.mail+' and your age is '+req.params.age+' Welcome GET request made successfully on Request Params');
})

server.listen(8050,(err)=>{
    if(err) throw err;
    else{
        console.log('listening on port 8050');
    }
});