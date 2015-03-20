Meteor.subscribe('profiles');

Template.profilesList.helpers({
	profilesList: function() {
		return Profiles.find();
	},
	profilesCount: function() {
		return Profiles.find().count();
	}
});