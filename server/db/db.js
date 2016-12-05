var mongoose = require('mongoose');
require('dotenv').config();

let url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds119608.mlab.com:19608/apptrakdb';

var db = mongoose.connect(url);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;

// add filepath in server for this new db location
