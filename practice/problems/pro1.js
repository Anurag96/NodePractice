const firstUser = ()=>{
    console.log('user one')
}
const secondUser = ()=>{
    console.log('user two')
}

const sampleFunction = ()=>{
    console.log('sampleFunction')

    setTimeout(firstUser,0)

    new Promise((resolve)=>{
        resolve('Data  is resolved')
    }).then(resolve=>console.log(resolve))
    
    secondUser()
}
sampleFunction()