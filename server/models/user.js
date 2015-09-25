var
	mongoose = require('mongoose'),
	encryption = require('./../util/encryption');

var userSchema = mongoose.Schema({
	firstName: {
		type: String,
		require: '{PATH} is required',
		trim: true
	},
	lastName: {type: String, require: '{PATH} is required'},
	username: {
		type: String,
		require: '{PATH} is required',
		unique: true
	},
	password: {type: String, require: '{PATH} is required'},
	salt: {type: String, require: '{PATH} is required'},
	roles: [String]
});
userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return encryption.hashPassword(this.salt, passwordToMatch) === this.password;
	},
	hasRole: function(role) {
		return this.roles.indexOf(roles) > -1;
	}
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(error, collection) {
		if (collection.length === 0) {
			var salt = encryption.createSalt();
			var hash = encryption.hashPassword(salt, 'jeff');
			User.create({ firstName: "Jeff", lastName: "Neves", username: "jeff", password: hash, salt: salt, roles: ["admin"] });
			salt = encryption.createSalt();
			hash = encryption.hashPassword(salt, 'joe');
			User.create({ firstName: "Joe", lastName: "Doe", username: "joe", password: hash, salt: salt, roles: [] });
			salt = encryption.createSalt();
			hash = encryption.hashPassword(salt, 'dan');
			User.create({ firstName: "Dan", lastName: "Johnes", username: "dan", password: hash, salt: salt });
		}
	});
};
exports.createDefaultUsers = createDefaultUsers;