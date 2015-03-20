Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'profilesList',
});

Router.route('/profiles/:_id', {
	name: "profileView",
	data: function () {
		return Profiles.findOne(this.params._id);
	}
});

Router.route('/insert/profile', {
	name: "insertProfile",
});

Router.route('/profiles/:_id/edit', {
	name: "updateProfile",
	data: function () {
		return Profiles.findOne(this.params._id);
	}
});

Router.route('/profiles/_id/delete', {
	name: "deleteProfile",
	data: function () {
		return Profiles.findOne(this.params._id);
	}
});