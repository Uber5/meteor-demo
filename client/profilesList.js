Meteor.subscribe('profiles');

Template.profilesList.helpers({
	profilesList: function() {
		return Profiles.find();
	}
});