var
	mongoose = require('mongoose');

var stampSchema = mongoose.Schema({
	type: String,
	shortname: String,
	name: String,
	description: String
});
module.exports = mongoose.model('Stamp', stampSchema);