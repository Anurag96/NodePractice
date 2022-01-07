var fs= require('fs');

fs.mkdir('Data',()=>{
    fs.writeFile('./Data/Finance.text','Hello Anurag, you ran Demo11.js \n you can delete this.',()=>{
        fs.readFile('./Data/Finance.text','utf8',(err,data)=>{
            fs.mkdir('Banking',()=>{
                fs.writeFile('./Banking/Account.txt',data,()=>{
                    fs.unlink('./Data/Finance.txt',()=>{
                        fs.rmdir('Data',()=>{})
                    })
                })
            })
        })
    })
})