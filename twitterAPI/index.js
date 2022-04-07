const express = require('express');
const bodyParser = require('body-parser');
const userAuthRoutes = require('./user/routes/user-auth-routes');
const userRoutes = require('./user/routes/user-routes');
const mongoDb = require('./config/mongodb')

const server = express();


// server.use(express.urlencoded({extended: true}));
server.use(express.json());

//connect to MongoDB
mongoDb.connect();


// server.get('/api/user/auth',userAuthRoutes);
// server.post('/api/user/auth',userAuthRoutes);
// server.put('/api/user/auth',userAuthRoutes);
// server.delete('/api/user/auth',userAuthRoutes);
/** The above all methods can be replace by use */
server.use('/api/user/auth',userAuthRoutes);
server.use('/api/user',userRoutes);
// server.use((req,res) => {
    
//     res.status(404).send("Please check your path");
// })
server.get('/',(req,res)=>{
    res.send('Welcome to Anurag\'s Express App')
})
server.listen(8080,()=>{
    console.log('Port running on 8080')
})