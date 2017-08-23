var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var port    = 8000;

app.use(express.static(__dirname + '/public'))
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    socket.on('chat message', function(msg) {
       io.emit('chat message', msg); 
    });
});
http.listen(port, function() {
    console.log('Listening on *:' + port);
});
