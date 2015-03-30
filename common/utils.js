// var refreshItems = function() {
//   var items = Meteor.http.get("http://localhost:8000/api/profiles");
//   Items.remove({id: { $nin: _.map(items, function(item) { return item.id; })}});
//   _.each(items, function(item) {
//     Items.upsert({ id: +item.id }, 
//     {
//       id: +item.id,
//       name: item.first_name,
//     });
//   });
// }