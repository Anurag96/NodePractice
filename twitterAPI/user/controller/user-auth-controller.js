const userModel = require('../models/user');

exports.register = (req,res)=>{

    const newUser = new userModel(req.body.name, req.body.email, req.body.password,req.body.gender);
    res.send('This is register')
   
}
exports.login = (req,res)=>{
    console.log("Login request")
    res.send('This is login')
}
exports.delete = (req,res)=>{
    console.log("Delete request")
    res.send('This is delete')
}