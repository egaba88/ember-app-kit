var IndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  loggedIn: false,
  
  beforeModel: function(transition) {
    if (/hd=brandingbrand.com/.test(window.location.search)) {
      this.transitionTo("confirm");
    }
  },
  
  actions: {
    didTransition: function() {
      if (this.get("loggedIn")) return;
      
      var accessToken = window.sessionStorage.getItem("accessToken");
      
      Ember.SimpleAuth.externalLoginSucceeded({
        access_token: accessToken
      });
      
      this.set("loggedIn", true);
      
      return false;
    }
  },
  model: function() {
    return [
      "m.wayfair.com",
      "t.nomorerack.com"
    ];
  }
});

export default IndexRoute;
