const fs= require('fs');

const dataBuffer =(fs.readFileSync('jsondata.json').toString());

const info=JSON.parse(dataBuffer);

info.title='harry';

const infoJSON = JSON.stringify(info);
fs.writeFileSync('jsondata.json',infoJSON);

