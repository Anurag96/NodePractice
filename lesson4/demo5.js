const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req, res)=>{
    res.render('Demo4Index',{title: 'EJS',user:'Anurag'})
}).listen(3000);

console.log('Port is running on 3000')