var express         = require('express'),
    mongoose        = require('mongoose'),
    Profile         = require('../models/profile.js'),
    Calendar        = require('../models/calendar.js'),
    router          = express.Router();
    // Set Front End Libraries to Include as Needed
    jquery          = 'components/jquery/dist/jquery.min.js',
    knockout        = 'components/knockout/knockout.js',
    d3              = 'components/d3/d3.min.js',
    io              = 'components/socket.io-client/dist/socket.io.min.js';

/*
Set Router
*/

module.exports = function (app) {

    app.use('/', router);
    
};

/*
Custom Router Middleware
*/

// router.use(function (req, res, next) {
//     console.log("Method:", req.method);
//     console.log("Request Body:", req.body);
//     next();
// });

/*
General Request & Response
*/

// Index Route
router.get('/', function (req, res, next) {
    res.render('index', {
        title       : 'Calendi',
        css         : 'index.css',
        libs        : [jquery, knockout, d3],
        js          : ['js/index.js']
    });
});

// Run Crawler Visualization
router.get('/calendar', function (req, res, next) {
    res.render('calendar', {
        title       : 'Calendar',
        css         : 'Calendar.css',
        libs        : [jquery, io, knockout, d3],
        js          : ['js/calendar.js']
    });
});

/*
Authentication Request & Response Handling
*/

// Login Route
router.get('/login', function (req, res, next) {
    res.render('login', {
        title       : 'Log In',
        css         : 'authentication.css',
        libs        : [jquery],
        js          : []
    });
});

// Login Route
router.get('/logout', function (req, res, next) {
    res.render('Log Out', {
        title       : 'Log Out',
        css         : 'authentication.css',
        libs        : [jquery],
        js          : []
    });
});