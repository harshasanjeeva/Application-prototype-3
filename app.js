var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var lineReader = require('line-reader');
var index = require('./app_server/routes/index');
var mongo = require('mongodb');
var monk = require('monk');
var mongoose = require('mongoose');
//var db = monk('localhost:27017/nodetest1');
var app = express();

mongoose.connect('mongodb://localhost:27017/nodetest1');
//View engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'html');
// app.engine('html',require('ejs').renderFile);
//app.set('view engine','ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(function(req,res,next)
// {
//     req.db = db;
//     next();
// });
//app.use(session( {secret: "String for encrypting cookies." } ));

app.use('/',index);

module.exports = app;
app.listen(5000, function(){
//app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!");
});;