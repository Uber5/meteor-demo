Profiles = new Mongo.Collection('profiles');

var Schemas = {};

Schemas.Profile = new SimpleSchema({
	first_name: {
		type: String,
		label: "First Name",
		max: 50
	},
	last_name: {
		type: String,
		label: "Last Name",
		max: 50
	},
	email: {
		type: String,
		label: "Email Address",
		regEx: SimpleSchema.RegEx.Email,
		max: 50
	}
});

Profiles.attachSchema(Schemas.Profile);