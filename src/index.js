var Alexa = require('alexa-sdk');
// WORKS!
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
}