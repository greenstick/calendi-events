var express         = require('express'),
    mongoose        = require('mongoose'),
    Profile         = require('../models/profile.js'),
    Calendar        = require('../models/calendar.js'),
    api             = express.Router();

/*
Set API
*/

module.exports = function (app) {

	app.use('/api', api);

};

/*
Custom API Middleware
*/

// api.use(function (req, res, next) {
//     console.log("Method:", req.method);
//     console.log("Request Body:", req.body);
//     next();
// });

/*
API Request & Response Handling
*/

// Login
api.all('/login', function (req, res, next) {
	console.log("Status: API POST Request - Login.");
});

// Logout
api.all('/logout', function (req, res, next) {
    console.log("Status: API POST Request - Logout.");
});

// Delete Profile Data
// api.all('/delete-profile-db', function (req, res, next) {
//     var query = Profile.remove({});
//     query.exec(function (error, clinicaltrials) {
//         if (error) return console.log(error);
//         console.log("Status: All MongoDB Profile Records Deleted")
//         res.end();
//     }) 
// });

// Delete Calendar Data
// api.all('/delete-calendar-db', function (req, res, next) {
//     var query = Calendar.remove({});
//     query.exec(function (error, clinicaltrials) {
//         if (error) return console.log(error);
//         console.log("Status: All MongoDB Calendar Records Deleted")
//         res.end();
//     }) 
// });
