//Our server module.
var http = require("http");
var url = require("url");

//The start function, which starts the server.
//Use request and response objects to handle details of requests.
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + ".");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server Live.");
}

exports.start = start;
