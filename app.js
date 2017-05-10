var express = require('express');

var app = express();
var port = 8000;

app.use(express.static('public'));
app.use(express.static('src/views'));


 mongoose = require('mongoose'),
  Task = require('./api/models/task'),
  //bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb'); 


//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


var routes = require('./routes/taskroutes');
routes(app);


app.get('/',function(req, res){
		res.send('hello world');
});


app.get('/tasks',function(req, res){
		res.send('hello tasks');
});

app.listen(port, function(err){console.log("running server on port:" + port);});