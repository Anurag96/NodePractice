console.log('The Main Thread exceution has started');

setTimeout( ()=> {console.log('5 seconds delay timer')},5000);

setTimeout( ()=> {console.log('0 seconds timer')},0);

console.log('The Main Thread  exceution has finished');
