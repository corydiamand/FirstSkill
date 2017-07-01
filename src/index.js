'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        this.emit(':tell', 'Sup Scott');
    },


    'ComplimentClaire': function () {
        this.emit(':tell', 'Claire, you look beautiful today');
    },

};