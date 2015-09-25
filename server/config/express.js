var
	express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    logger = require('morgan');

module.exports = function(app, config) {
	app.use(express.static(config.appPath));
	app.use(logger('dev'));
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(bodyParser.json());
};