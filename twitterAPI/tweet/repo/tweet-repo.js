const {ObjectId } = require("mongodb");
//ObjectId is a function,part of mongodb to import that
const db = require("../../config/mongodb");


const getTweetCollection = () =>{
    return db.getCollection("tweet");
}

exports.postTweet = (model,cb)=>{
  
   getTweetCollection().insertOne({content:model.content,timestamp :model.timestamp,userID:model.userID})
    .then(()=>{
        cb();
    }),err=>{throw new Error(err)}
}