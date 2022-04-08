const tweetModel = require('../models/tweet')

exports.postTweet =(req,res)=>{
const newTweet = new tweetModel(req.body.content,new Date(),req.body.userID)

}