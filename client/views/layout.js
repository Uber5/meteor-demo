Template.layout.events({
	"click .alert-external": function(e) {
		e.preventDefault();
		Meteor.call('getFromRESTService', function(error, results) {
    	alert(results.content);
  	});
	}
});