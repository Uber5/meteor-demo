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
      return Meteor.http.get("http://localhost:8000/api/profiles");
    }
  });
}