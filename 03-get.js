// url 模块
const urlLib = require('url');
const http = require('http');

http.createServer(function (request, response) {


  var obj = urlLib.parse(request.url, true);


  var url = obj.pathname;
  var GET = obj.query;

  console.log(url, GET);

  // response.write(url);
  response.write('ok')

  response.end();

}).listen(8080);
