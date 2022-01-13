var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is babery api server :)');
});

app.listen(8080, function() {
    console.log('Connect 8080 port');
});