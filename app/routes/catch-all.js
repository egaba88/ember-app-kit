var CatchAllRoute = Ember.Route.extend({
  param: "",
  
  redirect: function(transition) {
    this.set("param", transition[":"]);

    window.sessionStorage.setItem("accessToken", this.getQueryParameter("access_token"));
    
    this.transitionTo("index");
  },
  
  getQueryParameter: function(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(this.get("param"));
    return results == null ? "" : window.decodeURIComponent(results[1].replace(/\+/g, " "));
  }
});

export default CatchAllRoute;
