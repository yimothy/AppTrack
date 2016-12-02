var mongodb = require('mongodb');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//call express as app
var app = express();

//Setting up paths for frontend
module.exports = function (app, express) {
  app.use(express.static(path.join(__dirname, '/../../node_modules')));
  app.use(express.static(path.join(__dirname, '/../../client')));
};

//connect to mongo database named 'AppTrack'
//heroku, make project, mlab is available as heroku add-on
var url = 'mongodb://localhost/AppTrack';
mongoose.connect(url);

//Display the index as homepage
app.get('/', function(request, response) {
  response.sendfile('client/index.html');
});

//set up the server on env.PORT or 8080
var port = process.env.PORT || 8080;
app.listen(port, function(err) {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port: ', port);
})
