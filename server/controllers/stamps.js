var
	Stamp = require('mongoose').model('Stamp');

exports.find = function (request, response) {
	Stamp.find({}).exec(function (error, stamps) {
		if (error) { response.send(error); }
		response.json(stamps);
	});
};
exports.show = function (request, response) {
	Stamp.findOne({shortname: request.params.shortname}).exec(function (error, stamp) {
		if (error) { response.send(error); }
		response.json(stamp);
	});
};