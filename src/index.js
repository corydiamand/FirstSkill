var Alexa = require('alexa-sdk');
// WORKS!
// fuck yeah
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
}