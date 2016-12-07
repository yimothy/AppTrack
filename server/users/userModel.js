var mongoose = require('mongoose');
// this file describes the userSchema for how mongoose writes to the database
// this is only used in the sign up endpoint



var UserSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
