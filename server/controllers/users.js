var
	User = require('mongoose').model('User'),
	encryption = require('./../util/encryption');

exports.getUsers = function (request, response) {
	User.find({}).exec(function (error, collection) {
		response.json(collection);
	});
};

exports.createUsers = function (request, response, next) {
	var userData = request.body;
	userData.username = userData.username.toLowerCase();
	userData.salt = encryption.createSalt();
	userData.password = encryption.hashPassword(userData.salt, userData.password);
	User.create(userData, function(error, user) {
		if (error) {
			if (error.toString().indexOf('E11000') > -1) {
				error = new Error('An account with this username already exists.');
			}
			response.status(400);
			return response.send({ reason : error.toString() });
		}
		request.logIn(user, function(error) {
			if (error) {
				return next(error);
			}
			response.send(user);
		});
	});
};

exports.updateUser = function (request, response) {
	var userData = request.body;

	if (request.user._id != userData._id && !request.user.hasRole('admin')) {
		response.status(403);
		return response.end();
	}

	request.user.firstName = userData.firstName;
	request.user.lastName = userData.lastName;
	request.user.username = userData.username;
	// FIXME Password changes everytime
	if (userData.password && userData.password.length > 0) {
		request.user.salt = encryption.createSalt();
		request.user.password = encryption.hashPassword(request.user.salt, userData.password);
	}
	request.user.save(function(error) {
		if (error) {
			response.status(400);
			return response.send({reason: error.toString()});
		}
		response.send(request.user);
	});
};