var express = require('express');
var app=express();

app.set('view engine','ejs');

app.get('/',function(req,resp){
    resp.render('Demo18Index',{user:'Great User',title:'Homepage'});
});

app.listen(8080);
console.log('8080 port is working!');