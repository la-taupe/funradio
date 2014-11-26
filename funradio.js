exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;

var myArray = ['ok', "c'est fait", 'encore ?', "d'accord", 'si tu veux'];
  var tts = myArray[Math.floor(Math.random() * myArray.length)];

  if (data.val == "funradio"){
	var process = '%CD%/plugins/funradio/funradio.bat';
  }
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
  if (data.val == "funradio"){
  callback({'tts': tts});
  }

}
 