var  getUserDetails  = new Promise((resolve)=>{
    setTimeout(()=>{resolve(1)},4000)
})

getUserDetails.then((result)=>{
    console.log(result)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(result*2)
        },1000)

    })
})

getUserDetails.then((result)=>{
    console.log(result)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(result*2)
        },1000)

    })
})

getUserDetails.then((result)=>{
    console.log(result)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(result*2)     
        },1000)

    })
})