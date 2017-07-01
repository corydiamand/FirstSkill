var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
      alexa.registerHandlers(handlers);
	  alexa.execute();
}

var handlers = {
	'TestIntent': function () {
		this.emit(':tell', 'Hi Claire. You look nice. Whatcha gonna make for lunch?');
	}
}
