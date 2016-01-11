// modules + middleware
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();

app.set('view engine', 'ejs');

// I don't know what to do with mongoDB

app.use(express.static('./public'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));



// routing

var indexRouting = require('./routes/index');

app.get('/', indexRouting );


// listening
var port = 8080;
app.listen(port, function(){
  console.log("..listening on port " + port);
})
