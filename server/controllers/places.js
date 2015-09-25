var
	Place = require('mongoose').model('Place');

exports.find = function (request, response) {
	Place.find({}).exec(function (error, places) {
		if (error) { response.send(error); }
		response.json(places);
	});
};
exports.create = function (request, response) {
	Place.findOne({url: request.params.url}).exec(function (error, place) {
		if (error) { response.send(error); }
		response.json(place);
	});
};
exports.edit = function (request, response) {
	Place.findOne({url: request.params.url}).exec(function (error, place) {
		if (error) { response.send(error); }
		var placeData = request.body;
		place.save(function(error) {
			if (error) { response.send(error); }
			response.json({ message: 'Place updated' });
		});
	});
};
exports.show = function (request, response) {
	Place.findOne({url: request.params.url}).exec(function (error, place) {
		if (error) { response.send(error); }
		response.json(place);
	});
};
exports.search = function (request, response) {
	console.log(request.body.stamps);
	Place.find({ 'stamps.name' : { $all : request.body.stamps} }).exec(function (error, places) {
		if (error) { response.send(error); }
		response.json(places);
	});
};