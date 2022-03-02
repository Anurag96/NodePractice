const mongodbClient = require('mongodb').MongoClient;
const url ="mongodb+srv://anukumar0119:Amarsingh1996@cluster0.fv9i3.mongodb.net/twitterapp?retryWrites=true&w=majority"

var dbClient;
exports.connect = ()=>{
    debugger;
    mongodbClient.connect(url)
    .then(
        (client)=>{
            dbClient = client;
            console.log("MongoDB is connected!");
        },
        (err)=>{console.log(err)}
    )
}
// getCollection is used to retrieve User collection 
exports.getCollection = (name)=>{
    return dbClient.db("twitterapp").collection(name)
}