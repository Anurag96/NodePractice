const request = require('request');
const url = "https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=DEMO_KEY";

request(url, {json : true},  (err,res,body) => {
    if(err) {return console.log("Unable to connect to serivce")}
    else if (res.body.err){return console.log("Invalid URL")}
    else{
        {return console.log(body[0].beginTime)}
    }
})