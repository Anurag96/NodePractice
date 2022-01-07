import express from 'express';      //ES6 imports only works due to babel

const app=express();
const port=8900;

app.get('/',(req,resp)=>{      
   resp.send('Api with ES6');
});

app.listen(port,(err)=>{      
  if(err) throw err;
  else{
      console.log('Running on port ' + port);
  }
});


