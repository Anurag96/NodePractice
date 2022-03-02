const mongodbClient = require('mongodb').MongoClient;
const url ="mongodb+srv://anukumar0119:Amarsingh1996@cluster0.fv9i3.mongodb.net/twitterapp?retryWrites=true&w=majority"

exports.connect = ()=>{
    debugger;
    mongodbClient.connect(url)
    .then(
        (client)=>{
            console.log("MongoDB is connected!");
        },
        (err)=>{console.log(err)}
    )
}