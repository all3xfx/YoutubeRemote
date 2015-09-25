var
	Content = require('mongoose').model('Content');

exports.find = function (request, response) {
	Content.find({}).exec(function (error, collection) {
		response.json(collection);
	});
};
exports.show = function (request, response) {
	Content.findOne({url: request.params.url}).exec(function (error, collection) {
		response.json(collection);
	});
};