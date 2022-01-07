const request = require('request');
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

request(url, {json : true},function(err,req,res){
    console.log(res.url);
   
    console.log(res.date);
    console.log(res.copyright);
    console.log(res.title);
    console.log(res.explanation);
})