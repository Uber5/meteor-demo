Template.login.events({
  'click .login': function () {
    Meteor.loginWithMitre({}, function(err) {
      if (err) {
        console.log('loginWithMitre, err=', err);
      }
    });
  },
  'click .logout': function() {
    Meteor.logout();
  }
});