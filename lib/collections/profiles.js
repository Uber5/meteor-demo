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
		max: 50,
		unique: true,
		label: "Email Address",
		regEx: SimpleSchema.RegEx.Email
	},
	dateJoined: {
		type: Date,
		autoValue: 	function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	},
	updatedAt: {
	    type: Date,
	    autoValue: function() {
	    	if (this.isUpdate) {
	        	return new Date();
	    	}
	    },
	    denyInsert: true,
	    optional: true
  	},
});

Profiles.attachSchema(Schemas.Profile);