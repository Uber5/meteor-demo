Template.items.helpers({
	itemsList: function() {
		return Items.find();
	}
});

Template.items.events({
	"click .create": function(e) {
		e.preventDefault();

		var input = {
			"first_name": $("[name='first_name']").val(),
			"last_name": $("[name='last_name']").val(),
			"email": $("[name='email']").val()
		};
		Meteor.call('addWithRESTService', input, function(error, result) {
			if (error) {
				alert(error);
			}	else {
				alert("Insert successful.");
			}
		});
	}
});