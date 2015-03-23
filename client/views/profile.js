Template.profilesList.helpers({
	profilesList: function() {
		return Profiles.find();
	},
	profilesCount: function() {
		return Profiles.find().count();
	}
});

Template.profilesList.events({
	'click .delete': function(e) {
		e.preventDefault();
		var profileId = this._id;
		if (confirm("Delete this Profile?")) {
			Profiles.remove(profileId);
			Router.go('profilesList');
		}
	}
});

AutoForm.addHooks(['profileUpdate', 'profileInsert'], {
	after: {
		update: function() {
			return Router.go('/');
		},
		insert: function() {
			return Router.go('/');	
		}
	}
});