if (Meteor.isServer) {
  Meteor.startup(function () {
    ServiceConfiguration.configurations.remove({
      service: 'mitre'
    });
    
    ServiceConfiguration.configurations.insert({
      service: 'mitre',
      clientId: '57d785fc-1df4-42a4-aca4-21b1439bc867',
      loginStyle: 'redirect',
      secret: 'AMROz0pBU2Ae9oQchzjM9CBpuwA5jhH-8ec9N6cpwKfE_ybeb9tb4_3YeqsOzgj78OeMXYqaTwK5BAjtsEGM3MQ',
      issuer:  'https://authenticate.mytimeslot.co.za/auth',
      requestPermissions: [ 'email', 'userinfo', 'openid' ]
    });   
  });

  Meteor.methods({
    getFromRESTService: function() {
      var items = Meteor.http.get("http://localhost:8000/api/profiles");
      return items;
    },
    addWithRESTService: function(item) {
      Meteor.http.post("http://localhost:8000/api/profiles", item, function(error, result) {
        // return result.
      });
    },
    putWithRESTService: function(item) {
      Meteor.http.put("http://localhost:8000/api/profiles/:_id", item, function(error, response) {
        // return result.
      });
    },
    deleteWithRESTService: function(item) {
      Meteor.http.del("http://localhost:8000/api/profiles/:_id", item, function(error, response) {
        // return result.
      });
    }
  });
}