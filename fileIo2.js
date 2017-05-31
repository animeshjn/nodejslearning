var fs= require('fs');
fs.appendFile('sampleFile.txt','Append this content', function(err){
if(err) throw err;
console.log('saved :)');

});