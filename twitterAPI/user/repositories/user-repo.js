
const {ObjectId } = require("mongodb");
//ObjectId is a function,part of mongodb to import that
const db = require("../../config/mongodb");

//user data - model
//cb- callback ro invole after data is created
//This add method is called in controller
exports.add = (model,cb)=>{
    //once user collection is retrived from Database
   const collection = db.getCollection("user");
   //Then we insert data into collection
   collection.insertOne({name:model.name,email:model.email,password:model.password,gender:model.gender})
    .then(()=>{
        cb();
    }),err=>{throw new Error(err)}
}

exports.update = (model,cb) => {
    //get te collection
    const collection = db.getCollection("user");
    //define how to find the document
    const filter = {_id:ObjectId(model._id)}
    //define what property of the document is to be updated
    //$set operator commands mongodb to update the key with the value
    const update = {$set: {name:model.name,password:model.password,gender:model.gender}}
    collection.findOneAndUpdate(filter,update)
    .then(()=>{
        cb()
    },err=>{console.log(err)})
}

exports.getByID = (id,cb) => {
    //get te collection
    const collection = db.getCollection("user");
    //find data
    collection.findOne({_id:ObjectId(id)})
    .then(
        (user)=>cb(user),
        err=>{console.log(err)}
        )
}