// Calendar Model
var mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

var Calendar            = new Schema({
    url                             : String
    // domString                    : String,
    // links                        : Array,
    // robot                        : String,
    // created                      : Date,
    // updated                      : Date
});

module.exports = mongoose.model('Calendar', Calendar);