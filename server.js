// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(7777);


var http = require("http");
var url = require("url");

function start(route, handle) {
function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for" + pathname + " received.");
  // route(handle, pathname);
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // var content = route(handle, pathname)
  // response.write(content);
  // response.end();
  route(handle, pathname, response);
}

http.createServer(onRequest).listen(7777);
console.log("Server has started.");

}

exports.start = start;
