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