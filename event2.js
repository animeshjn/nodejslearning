var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var shoutHandler = function () {
  console.log('someone is shouting');
}
//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('shout',shoutHandler);
//Fire the 'scream' event:
//eventEmitter.emit('scream');
eventEmitter.emit('shout');
