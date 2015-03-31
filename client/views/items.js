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
				alert("Error: ", error)
			} else {
				refreshItems();
			}
		});
	}
});

var refreshItems = function() {
  var response = Meteor.call('getFromRESTService');
  alert("Response: ", response);
  var items = JSON.parse(response.content);
  Items.remove({
  	id: { $nin: _.map(items, function(item) { return item.id; })}
  });
  _.each(items, function(item) {
    Items.upsert({ id: +item.id },
    {
      id: +item.id,
      name: item.first_name,
    });
  });
}