//2. Express.js to build the server on top of Node.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello welcome to express!');
})
app.listen(2000);

console.log('Po is running on 2000')