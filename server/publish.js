Meteor.publish('profiles', function() {
	return Profiles.find();
});


var refreshItems = function() {
  var response = Meteor.http.get("http://localhost:8000/api/profiles");
  var items = response.content;
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

Meteor.publish('items', function() {
		refreshItems();
		return Items.find();
});