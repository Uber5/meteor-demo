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

Router.route('/insert', {
	name: "profileInsert",
});

Router.route('/profiles/:_id/edit', {
	name: "profileUpdate",
	data: function () {
		return Profiles.findOne(this.params._id);
	},
});