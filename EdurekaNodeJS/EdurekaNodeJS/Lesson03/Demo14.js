new Promise ((resolve, reject) => {
       resolve(1);
}).then (value => {console.log('start delay')
     return 1;
  }).then (value => {setTimeout(() => { console.log('1 second') }, value*1000);
       return 2;
    }).then (value => {setTimeout(() => { console.log('3 seconds') }, value*3000);
        return 3;
    }).then (value => {setTimeout(() => { console.log('6 seconds') }, value*6000);
         return 4;
      }).catch(err => {
            console.log(err);
         });