// const mongodb = require('mongodb');
// var mongoose = require('mongoose');

require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//call express as app
var app = express();

//Setting up paths for frontend
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(express.static(path.join(__dirname, '/../client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connect to mongo database named 'AppTrack'
//heroku, make project, mlab is available as heroku add-on

let url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds119608.mlab.com:19608/apptrakdb';
mongoose.connect(url);
console.log(url)
app.post('/form',(request, response) => {
	console.log(request.body);
})

//set up the server on env.PORT or 8080
const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port: ', port);
})

// module.exports = app;
