const userModel = require('../models/user');
const repo = require("../repositories/user")

exports.register = (req,res)=>{

    //Here model is storing the data, that is used to pass the request
    const newUser = new userModel(req.body.name, req.body.email, req.body.password,req.body.gender);
    //call repository, by passing the model
    repo.add(newUser,()=>{
        res.send('Data is added')
    })
   
}
exports.login = (req,res)=>{
    console.log("Login request")
    res.send('This is login')
}
exports.delete = (req,res)=>{
    console.log("Delete request")
    res.send('This is delete')
}