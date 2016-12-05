// var db = require('../db/db.js');
// var mongoose = require('mongoose');
//
// var userSchema = mongoose.Schema({
//   username: { type: String, required: true, index: { unique: true } },
//   password: { type: String, required: true }
// });
//
// var User = mongoose.model('User', userSchema);
//
// exports.createSession = function(req, res, newUser) {
//   return req.session.regenerate(function() {
//       req.session.user = newUser;
//       res.redirect('/');
//     });
// };
//
// exports.signupUser = function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;
//
//   User.findOne({ username: username })
//     .exec(function(err, user) {
//       if (!user) {
//         var newUser = new User({
//           username: username,
//           password: password
//         });
//         newUser.save(function(err, newUser) {
//           if (err) {
//             res.status(500).send(err);
//           }
//          exports.createSession(req, res, newUser);
//         });
//       } else {
//         console.log('Account already exists');
//         res.redirect('/signup');
//       }
//     });
// };
