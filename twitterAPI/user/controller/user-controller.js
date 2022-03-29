const userModel = require('../models/user');
const repo = require("../repositories/user");

exports.update = (req,res)=>{
    if(!req.body.id){
        res.send(400).send("ID is missing for user");
    }
    const userToUpdate = new userModel(res.body.name,res.body.email,res.body.gender,res.body.password,res.body.id);
    repo.update(userToUpdate,()=>{
        res.send("Data is updated")
    })
}