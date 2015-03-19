if (Meteor.isClient) {
  Template.insertProfileForm.helpers({
    posts: function() {
      return posts;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
