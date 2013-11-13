var IndexRoute = Ember.Route.extend({
  model: function() {
    return merchants;
  }
});

var merchants = [
  "m.wayfair.com"
];

export default IndexRoute;
