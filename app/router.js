var Router = Ember.Router.extend({
  location: 'hashbang'
});

// Register an `Ember.Location` implementation for "hashbang" URLs.
//
// Necessary for search engine bidirectional mapping of `_escaped_fragment_`:
//   https://developers.google.com/webmasters/ajax-crawling/docs/specification

Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({
  getURL: function() {
    return Ember.get(this, 'location').hash.substr(2);
  },

  setURL: function(path) {
    Ember.get(this, 'location').hash = '!' + path;
    Ember.set(this, 'lastSetURL', '!' + path);
  },

  onUpdateURL: function(callback) {
    var self = this;
    var guid = Ember.guidFor(this);

    Ember.$(window).bind('hashchange.ember-location-' + guid, function() {
      Ember.run(function() {
        var path = location.hash.substr(2);

        if (Ember.get(self, 'lastSetURL') === path) {
          return;
        }

        Ember.set(self, 'lastSetURL', null);

        callback(location.hash.substr(2));
      });
    });
  },

  formatURL: function(url) {
    return '#!' + url;
  }
}));

Router.map(function() {
  this.route("confirm");
  this.resource("login");
  this.resource("merchant", { path: "/:merchant" });
  this.route("catch-all", { path: "*:" });
});

export default Router;
