const express = require('express');
const app = express(); // Here express is initialized 

//2.Sending JSON data to server
app.get('/person', (req, res)=>{
    
    let personName=req.query.name;
    let age=req.query.age;
    res.json({name:personName,age})
})

app.listen(8090,() => {
    console.log('listening on port 8090')
});