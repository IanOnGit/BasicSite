//The primary file.
//Functions of other modules are included here as required.
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//The index of url handles that are accepted by the requestHandlers file.
var handle = {};
handle["/"] = requestHandlers.start;
handle["/home"] = requestHandlers.home;
handle["/profile"] = requestHandlers.profile;
handle["/profile/trophyroom"] = requestHandlers.trophyroom;
handle["/leaderboards"] = requestHandlers.leaderboards;

server.start(router.route, handle);
