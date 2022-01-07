var mongoose = require('mongoose'), Schema = mongoose.Schema; //initialize Schema creation feature


 var userModel= new Schema({  //schema definition
       name: {type:  String},
       city: {type:  String},
       job:  {type:  String}
 });

module.exports = mongoose.model('user',userModel,'userlist');
//user=custom name for the model , userModel=Schema Object, userlist=Collection name in Mongo DB