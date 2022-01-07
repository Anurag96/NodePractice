const fs= require('fs');

fs.readFile('jsondata.json',(err,data) => {
    if(err) throw err;

    out=JSON.parse(data);
    console.log(out.author);
});