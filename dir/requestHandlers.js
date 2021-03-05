//The requestHandler decides how each type of request is handled.
//exec will run a command from node.
var exec = require("child_process").exec

function start(response) {
  console.log("Request handler 'start' was called.");
  var content =
  //exec opens the html file and uses that text information as the
  //html of the page presented.
  exec("type home.html", function(error, stdout, stderr) {
    content = stdout;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(content);
  response.end();
  });
}

function home(response) {
  console.log("Request handler 'home' was called.");
  var content =
  exec("type home.html", function(error, stdout, stderr) {
    content = stdout;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(content);
  response.end();
  });
}

function profile(response) {
  console.log("Request handler 'profile' was called.");
  var content =
  exec("type profile.html", function(error, stdout, stderr) {
    content = stdout;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(content);
  response.end();
  });
}

function trophyroom(response) {
  console.log("Request handler 'trophyroom' was called.");
  var content =
  exec("type trophyroom.html", function(error, stdout, stderr) {
    content = stdout;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(content);
  response.end();
  });
}

function leaderboards(response) {
  console.log("Request handler 'leaderboards' was called.");
  var content =
  exec("type leaderboards.html", function(error, stdout, stderr) {
    content = stdout;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(content);
  response.end();
  });
}

exports.start = start;
exports.home = home;
exports.profile = profile;
exports.trophyroom = trophyroom;
exports.leaderboards = leaderboards;
