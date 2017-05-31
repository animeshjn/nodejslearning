//demo write
var fs= require('fs');
fs.writeFile('sampleFile.txt','This is sample content from write file',function(err){

	if(err) throw err;
	console.log('Saved!!');
	

});