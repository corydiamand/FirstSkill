'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        this.emit(':ask', 'Sup Claire! You are my favorite person ever.');
    },


    'ComplimentClaire': function () {
        this.emit(':tell', 'Claire, you are awesome. Scott loves you');
    },
    

    'InsultMatt': function () {
        this.emit(':tell', 'Matt Mehus, you suck');
    },

    'InsultScott': function () {
        this.emit(':tell', 'Scott Mehus, you are a square');
    },
};