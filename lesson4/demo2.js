const request = require('request');
const url = "https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=DEMO_KEY";

request(url, {json : true},function(err,req,res){
    console.log(res[0].beginTime);
    console.log(res[1].beginTime);
})