Profiles = new Mongo.Collection('profiles');

Profiles.allow({
	insert: function(userId, doc) {
		if (userId){
			return true;
		} else {
			return null;
		}	
	},
	remove: function(userId, doc) {
		if (userId){
			return true;
		} else {
			return null;
		}	
	},
	update: function(userId, doc) {
		if (userId){
			return true;
		} else {
			return null;
		}
	},
});

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