var express = require("express");
var app= express();

app.use(express.static('app'));
app.get('/',function(req,res){
    res.sendfile(__dirname + '/app/index.html');
})
 var server=app.listen(4001, function(){
     var host = server.address().address;
     var port = server.address().port;

     console.log('Listening at http://localhost:%d', port);
})