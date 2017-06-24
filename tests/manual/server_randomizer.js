var server, isFinished;
var count = 0;
// var limit = NaN;
var limit = 250;
runTest();

setInterval(function() {
  try {
    if (isFinished) runTest();
  } catch (e) {
    console.log(e);
    runTest();
  }
}, 500);

function runTest() {
  isFinished = false;
  if (!isNaN(limit) && count >= limit) process.exit(0);
  var server = require('child_process').fork('server.js');
  server.on('exit', function() {
    count++;
    console.log('Tests done: ', count);
    isFinished = true;
  });
}
