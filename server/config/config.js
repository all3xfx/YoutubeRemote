var
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../../'),
	appPath = path.normalize(__dirname + '/../../app/');

module.exports = {
	development: {
		rootPath: rootPath,
		appPath: appPath,
		db: '',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		appPath: appPath,
		db: '',
		port: process.env.PORT || 8080
	}
};