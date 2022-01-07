const series ={
    title: 'Harry potter and chamber of secrets',
    author: 'J.K. Rowling'
}

const seriesJSON = JSON.stringify(series);
console.log(seriesJSON);

const parsedData = JSON.parse(seriesJSON);

console.log(parsedData.title);