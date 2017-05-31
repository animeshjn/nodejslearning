//The fs.unlink() method deletes the specified file:
var f = require('fs');

f.unlink('sampleFile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});