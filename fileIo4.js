var fs = require('fs');

fs.appendFile('sampleFile.txt', ' This is my text to update from append.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});