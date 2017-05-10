var express = require('express');

var app = express();
var port = 8000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',function(req, res){
		res.send('hello world');
});


app.get('/tasks',function(req, res){
		res.send('hello tasks');
});

app.listen(port, function(err){console.log("running server on port:" + port);});