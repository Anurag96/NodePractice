# History of JavaScript
- Javascript was developed in 1995 in just 10 days along with JavaScript Engine and that engine was called as SpiderMonker and brower was NetEscape.

# Engine to run JavaScript code
- Later Chrome cameup with a better JavaScript engine called V8 engine and  that became popular.
V8 was making JavaScript code into machine readable code.

- V8 was till then only was used in the browser.

# Future Questions with JavaScript ability


### Then Question Aries ?
## 1. Can we used JavaScript everywhere, like mobile, desktop, Server(Backend) etc , cross-platform?

## Solution
```
  - Then they used V8 to build a RunTime environment, which will work on the machine. This platform is called Node.js
  - Node.js is basically ASYNCHRONUS && EVENT-DRIVEN && JAVASCRIPT RUNTIME ENVIRONMENT, where you can run JavaScript code. So using Node.js, you can run JavaScript on a standalone machine, not just browser. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
```
### Then Question Aries ?
## 2. How can JavaScript be used in Mobile/Desktop ? 

## Solution
```
  - Then they cameup with different framework like React, Angular, to build those application which are (cross-platform) like iOS & Android.
```

### Then Question Aries ?
## 3. How can JavaScript be used in Server(Backend) side ? 

  Idea : What if we can use HTTP Module or HTTP component inside NODE.js ?

## Solution
```
- The moment we have the http power, we can use Node.js on the server side.
- This make Node.js as server side component.
```

### Then Question Aries ?
## 4. Now do we have a framework to build a web application?

## Solution
```
- Express.js is a backend framework to build a web application on server side, where Node.js is server side runtime engine.
- We have different frontend framework like React/Angular to build to build UI, and 
- MongoDB on Node.js as database backend.
```

### Then Question Aries ?
## 4. What does Node.js do or has?

## Solution
    - It has NPM (Node Package Manager) which provides different libraries to build or add features.


# Installation Requirement
    - Visual Studio, MongoDB, Node.js


## HTTP module
Node.js has multiple modules available, there are inbuild module and user created module, which help to achieve the idea of modularity and flexibility, where different components are working together.

HTTP Module - inbult Module.
```
Here createServer() is function available in Module called HTTP module, which is responsible for creating Server.
Syntax: createServer((req,res)=>{})


Syntax: 
const http = require('http')
http.createServer((req,res)=>{})

```
### Libuv Inbuild-library

### NOTE: Node.js is used for I/O intensive work, but not CPU intensive work.
```
So Node.js  supports NON-BLOCKING I/O and ASYNCHRONUS SINGLE THREAD PROCESSING with help of Libuv.

Behind the scenes, Node.js uses external library called Libuv, which is built in C lang and has multiple thread.
```
```
- Libuv helps Node.js achieve ASYNCHRONUS SINGLE THREAD PROCESSING as it has multiple thread/work which has callback function and work is done parallely by single thread of Node.js. 
- Node.js achieve NON-BLOCKING I/O as libuv provide multiple worker and i/o is never blocked.
```
![My animated logo](./Capture.jpg)


### NPM (Node Package Manager)
npm is a package manager for the JavaScript programming language maintained by npm, Inc. This provides a third-party library to use.

### FILE SYSTEM 

```
// writeFile() is used to write data to file.
fs.writeFile('hello.txt','This is Anurag',(err) => {
    if(err)throw err;
    else{
        console.log('Data was Written successfully')
    }
})

// appendFile() is used to append data to file.
fs.appendFile('hello.txt',' This is second line.',(err)=>{
    if(err)throw err;
    else console.log("Data Appended successfully.")
})

// readFile() is used to read data from file.
fs.readFile('hello.txt',(err, data)=>{
    if(err)throw err;
    else console.log("Data Read successfully : "+data.toString())
})

// open() is used to open file & r+ is read/write format specifier for file.
fs.open('hello.txt','r+',(err, data) => {
    if(err){
       console.log(err);
    }else{
        console.log("Open and read successfully");
        
    }
});

// unlink() is used to detete file.
fs.unlink('hello.txt',(err)=>{
    if(err)throw err;
    else console.log("Data Deleted/Unlink successfully")
})
```