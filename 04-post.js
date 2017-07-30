const http = require('http');

http.createServer(function (request, response) {

  var str = '';
  var i = 0;

  request.on('data', function (data) {
    console.log(`第 ${i++} 次收到数据`);
    str += data;
  });

  request.on('end', function () {
    // console.log(str);
  })

  response.end();


}).listen(8080);
