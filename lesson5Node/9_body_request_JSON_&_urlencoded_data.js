const express = require('express');
const server = express();
var bodyParser = require('body-parser')

/**
 * Express route-specific
This example demonstrates adding body parsers specifically to the routes that need them. 
In general, this is the most recommended way to use body-parser with Express.
 */

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.post('/login/1',urlencodedParser,(req,res)=>{
  res.send('Welcome '+req.body.name)
  console.log(req.body)
})
server.post('/login/2',jsonParser,(req,res)=>{
  res.send('Welcome '+req.body.name)
  console.log(req.body)
})

/**
 * Express/Connect top-level generic
    This example demonstrates adding a generic JSON and URL-encoded parser as a top-level middleware,
    which will parse the bodies of all incoming requests. This is the simplest setup.
 */

server.use(express.json());         // to support JSON bodies
server.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//OR

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

server.post('/login/3',(req,res)=>{
  res.send('Welcome '+req.body.name)
  console.log(req.body)
})
server.post('/login/4',(req,res)=>{
  res.send('create user in req.body when sending JSON data')
  console.log(req.body)
})

server.listen(8070,()=>{ console.log('The Server is live on 8070')})