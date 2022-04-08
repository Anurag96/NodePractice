const {ObjectId } = require("mongodb");
//ObjectId is a function,part of mongodb to import that
const db = require("../../config/mongodb");


const getTweetCollection = () =>{
    return db.getCollection("tweet");
}

exports.add = (model,cb)=>{
  
    getTweetCollection.insertOne({content:model.content,userID:model.userID})
    .then(()=>{
        cb();
    }),err=>{throw new Error(err)}
}