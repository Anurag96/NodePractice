const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const userAuthRoutes = require('./user/routes/user-auth-routes');

server.get('/',(req,res)=>{
    res.send('Hello Anurag, to Express')
})
server.use(express.urlencoded({extended: true}));
server.use(express.json());
// server.get('/api/user/auth',userAuthRoutes);
// server.post('/api/user/auth',userAuthRoutes);
// server.put('/api/user/auth',userAuthRoutes);
// server.delete('/api/user/auth',userAuthRoutes);
/** The above all methods can be replace by use */
server.use('/api/user/auth',userAuthRoutes);

server.listen(8080,()=>{
    console.log('Port running on 8080')
})