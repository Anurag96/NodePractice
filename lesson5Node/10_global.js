/** Global Object */
console.log(global);

setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int); //this clears the interval
},2000);

const int = setInterval(()=>{console.log('in the interval')},1000);

/** Module */

console.log(__dirname); //This gets the absoulute path of the folder
console.log(__filename); //This gets the absoulute path of the file 
console.log(module);

