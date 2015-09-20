var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
mongoose.schemas = {};

require('./model');

var app = express();

var port = process.env.PORT || 3030;

//Load Routes**************************************
require('./routes/index.js')(app);

mongoose.connect('localhost', 'myTestDb', 27017);

var db = mongoose.connection;

db.on('error', function(err){
    console.log(err);
});

db.once('open', function(){
    app.listen(port, function(){
        console.log('Server start success', port);
    });
});