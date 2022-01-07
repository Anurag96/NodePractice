const request = require('request');

const url="https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=DEMO_KEY";

request(url,{json:true},(err,res,body) => {

     if(err) {return console.log("unable to connect to the server!");}
     else if(res.body.err) {return console.log("Invalid url");}
     else if(res.body.beginTime==0) {return console.log("Undefined");}
     else{
            console.log(body[0].beginTime);
            console.log(body[1].beginTime);
     }
});