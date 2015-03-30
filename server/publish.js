Meteor.publish('profiles', function() {
	return Profiles.find();
});

Meteor.publish('items' function() {
		refreshItems();
		return Items.find();
});