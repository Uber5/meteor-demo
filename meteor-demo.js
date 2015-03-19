if (Meteor.isClient) {
  Template.profilesList.helpers({
    profiles: function() {
      return Profiles.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
