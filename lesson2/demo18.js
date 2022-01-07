// Create An Application , Deploy With Pm2 And Nginx

const express = require('express')
const app = express()
const fs=require('fs')
const port =8750

app.get('/', (req, res) =>{
    res.send('<h1>Welcome to express!</h1>')
})

app.get('/getMovies',(req, res) =>{
    fs.readFile('./db.json',(err,result)=>{
        if(err) throw err;
        else{
            res.send(JSON.parse(result));
            
        }
    })
})

app.get('/getGroceries',(req, res)=>{
    fs.readFile('./grocery.json',(err,result)=>{
        if(err) throw err;
        else{

            console.log("This result is : "+result);
            res.send(JSON.parse(result));
            
        }
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('listening on port 8750')
})


// Fs Operations With Yargs

const argv = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');

function ifFileExists(filepath) {
    try {
        fs.accessSync(filepath, fs.constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

function askForUserInput(message) {
    rl.question(message, (fileName) => {
        if (ifFileExists(fileName)) {
            askForUserInput('File already exists, Please provide a new filename:=>');
        } else {
            writeToFile(fileName);
            rl.close();
        }
    });
}

function writeToFile(fileName) {
    fs.writeFile('fileNameList.txt', fileName, err => {
        if (err) {
            console.log('Error occured');
            return;
        }
        fs.writeFile(fileName, 'Hello', err => {
            if (err) {
                console.log('Error occured');
                return
            }
        });
    });
}

if (argv._[0] == 'write') {
    askForUserInput('Please provide the filename:=>');
}
else {
    console.log('No write operation');
}
