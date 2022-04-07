const userModel = require('../models/user');
const repo = require("../repositories/user-repo");

exports.update = (req,res)=>{
    if(!req.body.id){
        res.send(400).send("ID is missing for user");
    }
    const userToUpdate = new userModel(req.body.name,req.body.email,req.body.gender,req.body.password,req.body.id);
    repo.update(userToUpdate,()=>{
        res.status(200).send("Data is updated")
    })
}
exports.getByID =(req,res)=>{

    const id = req.params.id;
    repo.getByID(id,(user)=>{
        res.status(200).send(user)
    })
}