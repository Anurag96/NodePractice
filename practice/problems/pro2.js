var getUserDetails = new Promise((data)=>{
    setTimeout(()=>{data(1),4000})
})

getUserDetails.then((result)=>{
    console.log(result)
    return result*2
}).then((result)=>{
    console.log(result)
    return result*2
}).then((result)=>{
    console.log(result)
    return result*2
})