// const mongodb = require('mongodb');
// var mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//call express as app
const app = express();

//Setting up paths for frontend
module.exports = (app, express) => {
  app.use(express.static(path.join(__dirname, '/../node_modules')));
  app.use(express.static(path.join(__dirname, '/../client')));
};

//connect to mongo database named 'AppTrack'
//heroku, make project, mlab is available as heroku add-on

//const url = 'mongodb://localhost/AppTrack';
//mongoose.connect(url);

//Display the index as homepage
app.get('/',(request, response) => {
  response.sendfile('client/index.html');
});

app.post('/',(request, response) => {
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
