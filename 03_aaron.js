port = process.argv[2];
var port = (process.argv[2] ? Number(process.argv[2]) : 2000);
var net = require('net');
var server = net.createServer(respond);

function respond(socket) {
   var d = new Date(month, day, hours, minutes, seconds, milliseconds);
    socket.end(d.toTimeString());
}
console.log("Listening on port ", port);
server.listen(port);