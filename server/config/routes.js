module.exports = function(app, config) {

	// root route
	app.get('/', function (request, response) {
		response.sendFile('index.html', { root: config.appPath });
	});
};