Meteor.Subscribe('profiles');

Template.profilesList.helpers({
	profiles: function(){
		return Profiles.find();
	}
});