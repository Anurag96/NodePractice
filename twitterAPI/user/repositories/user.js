
const db = require("../../config/mongodb")

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