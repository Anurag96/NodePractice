const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('Demo4Index.ejs',{user:'Anurag', title:'Home Page'});

}).listen(8080);
console.log('The server listening on port 8080');
 