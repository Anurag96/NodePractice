//2. Express.js to build the server on top of Node.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello welcome to express!');
})

app.get('/alien',function(req,resp){
    resp.send('Welcome Alien')
})

app.get('/alien/20',function(req,resp){
    resp.send('Welcome Kumar')
})

app.get('/alien/:id',function(req,resp){
    const id= req.params.id;
    if(id==21){
        resp.send('Welcome '+id+'Rohith')
    }else if(id==22){
        resp.send('Welcome '+id+'Anurag')
    }else if(id==23){
        resp.send('Welcome '+id+'Rakul')
    }else if(id==24){
        resp.send('Welcome '+id+'Steve')
    }else if(id==25){
        resp.send('Welcome '+id+'Izzy')
    }else{
        resp.send('Welcome '+id+'Guest User')
    }
    
})

app.listen(2000);

console.log('Po is running on 2000')