const http = require("http");

var server = http.createServer(function(request, response) {

  response.write(request.url);
  response.end();

});

// 监听端口 8080
server.listen(8080)
