Items = new Mongo.Collection("items");

var refreshItems = function(userId) {
  var items = Meteor.call('getFromRESTService');
  Items.remove({ userId: userId, id: { $nin: _.map(items, function(item) { return item.id; })}});
  _.each(items, function(item) {
    Items.upsert({ id: +item.id }, {
      id: +item.id,
      userId: userId,
      name: item.name,
      timeStamp: item.time_stamp,
    });
  });
}