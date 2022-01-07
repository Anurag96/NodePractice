const firstUser = function(){
    console.log('UserOne');
}

const secondUser = function(){
    console.log('UserTwo');
}

const sampleFunction = ()=>{

    console.log('sampleFunction')
    setTimeout(firstUser,0)
    new Promise((resolve)=>
        resolve('Resolved Data')
    ).then(resolve=>console.log(resolve))
    secondUser()
}
sampleFunction()