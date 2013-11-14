var ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {
  redirectURI: (/amazonaws/.test(window.location.origin) ? "http://express-cdn.s3.amazonaws.com/mopinion/index.html" : "http://localhost:3000/"),
  
  actions: {
    login: function() {
      window.location.href =
        "https://accounts.google.com/o/oauth2/auth?" +
        "client_id=512207215042.apps.googleusercontent.com&" +
        "response_type=token&" +
        "scope=openid%20email&" +
        "redirect_uri=" + this.redirectURI + "&" +
        "state=brandingbrand" + this.redirectURI + "&" +
        "login_hint=joey@brandingbrand.com";
    }
  }
});

export default ApplicationRoute;
