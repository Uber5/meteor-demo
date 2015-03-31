Meteor.publish('profiles', function() {
	return Profiles.find();
});

Meteor.publish('items', function() {
		refreshItems();
		return Items.find();
});

var refreshItems = function() {
  var response = Meteor.call('getFromRESTService');
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