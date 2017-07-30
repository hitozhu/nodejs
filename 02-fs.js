const http = require("http");
const fs = require("fs");

var server = http.createServer(function(request, response) {

  var fileName = 'www' + request.url;

  fs.readFile(fileName, function (err, data) {

    if (err) {
      response.write("404")
      // console.log("reda file  Error");
    } else {
      response.write(data)
      // console.log(data.toString())
    }
    response.end();

  })

});

// 监听端口 8080
server.listen(8080)
