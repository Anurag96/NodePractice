const tweetModel = require('../models/tweet')
const repo = require('../repo/tweet-repo')

exports.postTweet =(req,res)=>{
const newTweet = new tweetModel(req.body.content,new Date(),req.body.userID)
    repo.postTweet(newTweet,()=>{
        res.send("Tweeet is  posted.")
    })
}