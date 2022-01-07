var express=require('express');
var router = express.Router();  //create a new Router object

router.get('/',function(req,res){          //define the default homepage route
   res.send('Birds home page');
});

router.get('/about',function(req,res){     //define the about route
    res.send('About Birds');
 });

module.exports=router;