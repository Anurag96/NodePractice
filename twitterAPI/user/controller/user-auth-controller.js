

exports.register = (req,res)=>{
    console.log("Resgister request")
    res.send('This is register')
    console.log(req.body)
    console.log(req.url)
}
exports.login = (req,res)=>{
    console.log("Login request")
    res.send('This is login')
}
exports.delete = (req,res)=>{
    console.log("Delete request")
    res.send('This is delete')
}