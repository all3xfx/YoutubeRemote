var
	mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
	url: String,
	title: String,
	body: String
});

var Content = mongoose.model('Content', contentSchema);