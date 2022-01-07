var promise = new Promise((resolve, reject)=> {

    const a = "Nodejss";
    const b = "Nodejs";

    if(a==b){
        resolve(); //promise object is returned
    } else{
        reject(); //promise object is returned
    }
}).then(()=>{
    console.log("The string are the same");
}).catch(()=>{
    console.log("The string is not the same");
})