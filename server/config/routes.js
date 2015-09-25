module.exports = function(app, config) {

	// root route
	app.get('/', function (request, response) {
		response.sendFile('index.html', { root: config.appPath });
	});
	app.get('/control', function (request, response) {
		response.sendFile('control.html', { root: config.appPath });
	});

};