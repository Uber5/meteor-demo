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