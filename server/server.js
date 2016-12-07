// const mongodb = require('mongodb');
// var mongoose = require('mongoose');
var User = require('./users/userModel.js');

require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Position = require('./positions/positionModel.js')

//call express as app
var app = express();

//Setting up paths for frontend
// app.use(session({
//  secret: 'shhh, it\'s a secret',
//  resave: false,
//  saveUninitialized: true
// }));

app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(express.static(path.join(__dirname, '/../client/')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connect to mongo database named 'AppTrack'
//heroku, make project, mlab is available as heroku add-on

let url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds119608.mlab.com:19608/apptrakdb';
mongoose.connect(url);
console.log(url)


app.post('/form', function(req,res){
// console.log(req.body)
	new Position({
	startDate: req.body.data.startDate,
	companyName: req.body.data.companyName,
	role: req.body.data.role,
	jobDescription: req.body.data.jobDescription,
	appliedThrough: req.body.data.appliedThrough,
	contactName: req.body.data.contactName,
	contactPhone: req.body.data.contactPhone,
	contactEmail: req.body.data.contactEmail,
	contactType: req.body.data.contactType,
	dateApplied: req.body.data.dateApplied,
	dateOfLastContact: req.body.data.dateOfLastContact,
	replyReceived: req.body.data.replyReceived,
	stages: req.body.data.stages,
	contractTime: req.body.data.contractTime,
	initialComp: req.body.data.initialComp,
	negotiated: req.body.data.negotiated,
	finalComp: req.body.data.finalComp,
	acceptReject: req.body.data.acceptReject})
	  .save();
});

app.get('/form', function(req,res){
    console.log("hitting get")
    Position.find(function(err, positions) {
    res.send(positions);
  });
})
app.get('/form/:role', function(req,res){
    console.log("hitting get")
    Position.find(function(err, job) {
    res.send(job);
  });
})

app.put('/form/:id', function(req, res){
	console.log("req.body", req.body)
	// var recordId =
	Position.findByIdAndUpdate(req.params.id, {$push: {"stages": req.body}},
			function(err, stage) {
		res.send(stage)
	})


})

// app.get('/signup', )

app.post('/signup', function(req, res) {
	console.log("req.body", req.body)
	var username = req.body.username;
	var password = req.body.password;

	User.find({ username: username },
		function(err, user) {
			if (!user) {
				var newUser = new User({
					username: username,
					password: password
				});

				newUser.save();
			} else {
				console.log('Account already exists');
			}
		}
	);
});


//set up the server on env.PORT or 8080
const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port: ', port);
})

// module.exports = app;
