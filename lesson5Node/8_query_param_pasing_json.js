const express = require('express');
const app = express(); // Here express is initialized 

//2.Sending JSON data to server
app.get('/school/:name/:city', function(req, res){
  
    let nameStudent=req.params.name;
    let cityName=req.params.city;
    res.json({name:nameStudent,city:cityName});
})

app.listen(8091,() => {
    console.log('listening on port 8091')
});

// http://localhost:8090/school/MIT/Boston