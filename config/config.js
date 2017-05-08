// App Configuration
var path                = require('path'),
    rootPath            = path.normalize(__dirname + '/..'),
    env                 = process.env.NODE_ENV || 'development';

var config = {
    development : {
        root        : rootPath,
        app         : {
            name        : 'calendi-events'
        },
        port        : process.env.PORT || 3000,
        wss_port    : process.env.WSS_PORT || 4000,
        db          : 'mongodb://localhost/calendi-events-development'
    },

    test        : {
        root        : rootPath,
        app         : {
            name        : 'calendi-events'
        },
        port        : process.env.PORT || 3000,
        wss_port    : process.env.WSS_PORT || 4000,
        db          : 'mongodb://localhost/calendi-events-test'
    },

    production  : {
        root        : rootPath,
        app         : {
            name        : 'calendi-events'
        },
        port        : process.env.PORT || 3000,
        wss_port    : process.env.WSS_PORT || 4000,
        db          : 'mongodb://localhost/calendi-events-production'
    }
};

module.exports = config[env];
