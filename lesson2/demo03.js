const fs = require("fs");

const series =[
    {
        "title": "Harry Potter",
        "author": "J. K Rooloing"
    },
    {
        "title":"Marry Potter",
        "author": "J. K Rooling"
    }
]

const seriesStringy = JSON.stringify(series);

// const data1= JSON.parse(data);

fs.writeFile("myData.json", seriesStringy,(err, data) => {
    if (err) throw err;
    console.log("Printed")
})

// fs.appendFile("myData.json", seriesStringy,(err, data) => {
//     if (err) throw err;
//     console.log("Appended")
// })