var express                 = require('express'),
    glob                    = require('glob'),
    favicon                 = require('serve-favicon'),
    logger                  = require('morgan');
    cookieParser            = require('cookie-parser'),
    bodyParser              = require('body-parser'),
    compress                = require('compression'),
    methodOverride          = require('method-override');

module.exports = function (app, config) {

    // Set View Engine and Views Directory
    app.set('views', config.root + '/app/views/jade');
    app.set('view engine', 'jade');

    // Set Environment 
    var env                     = process.env.NODE_ENV || 'development';
    app.locals.ENV              = env;
    app.locals.ENV_DEVELOPMENT  = env == 'development';

    // Middlewares - 
    app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static(config.root + '/public'));
    app.use(methodOverride());

    // Include Controllers - Exclude Web Sockets Paths
    var controllers             = glob.sync(config.root + '/app/controllers/!(socket).js');
        controllers.forEach(function (controller) {
            require(controller)(app);
        });

    // No Route to Handle Request - 404 Error Handling
    app.use(function (req, res, next) {
        var err                 = new Error('Not Found');
            err.status          = 404;
        next(err);
    });

    // Development Error Rendering
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message : err.message,
                error   : err,
                title   : 'Uh Oh!',
                css     : 'error.css', 
                libs    : [],
                js      : []
            });
        });
    }

    // Staging & Live Error Rendering
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message : err.message,
            error   : {},
            title   : 'Uh Oh!',
            css     : 'error.css',
            libs    : [],
            js      : []
        });
    });

};
