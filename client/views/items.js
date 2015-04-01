Meteor.subscribe('items');

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
			}
		});
	},

	"click .delete": function(e) {
		e.preventDefault();

		var id = $("[name='profile_id']").val();
		Meteor.call('deleteWithRESTService', id, function(error, result) {
			if (error) {
				alert(error);
			}
		});
	},

	"click .update": function(e) {
		e.preventDefault();

		var input = {
			"id": $("[name='update_id']").val(),
			"first_name": $("[name='update_first_name']").val(),
			"last_name": $("[name='update_last_name']").val(),
			"email": $("[name='update_email']").val()
		};
		Meteor.call('putWithRESTService', input, function(error, result) {
			if (error) {
				alert(error);
			}
		});
	}
});