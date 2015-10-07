var
	express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.set('log level', 2);

var config = require('./server/config/config')[env];
require('./server/config/express')(app, config);
require('./server/config/routes')(app, config);
require('./server/config/errors')(app);

io.on('connection', function(client) {
	client.on('join', function(video) {
		client.video = video;
		console.log('Watching '+video.url);
	});
	client.on('play', function() {
		console.log('Play');
		client.broadcast.emit('play');
	});
	client.on('stop', function() {
		console.log('Stop');
		client.broadcast.emit('stop');
	});
});

server.listen(config.port, function() {
	console.log('Listening on port '+config.port+'...');
});