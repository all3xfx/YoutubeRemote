module.exports = function(app) {
	// 404
	app.use(function(request, response, next) {
		response.status(404);
		if (request.accepts('html')) {
			return response.send("<h1>404</h1>");
		}
		if (request.accepts('json')) {
			return response.json({error: 'Not found'});
		}
		response.type('txt');
		response.send("Page not found");
	});

	// 500
	app.use(function(error, request, response, next) {
		response.send(500, "Oops, something is wrong");
	});
};