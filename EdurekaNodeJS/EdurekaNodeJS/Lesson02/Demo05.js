var fs=require('fs');
fs.stat('mytext.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('Got file info successfully!');

    //check file type
    console.log("isFile ?  " + stats.isFile());
    console.log("isdirectory ?  " + stats.isDirectory());
});