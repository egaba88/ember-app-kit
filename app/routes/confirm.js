var ConfirmRoute = Ember.Route.extend({
  activate: function() {
    var code = this.getQueryParameter("code");
    var clientID = "512207215042.apps.googleusercontent.com";
    var clientSecret = "QzTmycTne_3vuYWOIt-emu2B";
    var redirectURI = /amazonaws/.test(window.location.origin) ? "http://express-cdn.s3.amazonaws.com/mopinion/index.html" : "http://localhost:3000/";
    var grantType = "authorization_code";
    
    Ember.$.ajax({
      url: "http://accounts.google.com/o/oauth2/token",
      type: "POST",
      data: {
        code: code,
        client_id: clientID,
        client_secret: clientSecret,
        redirect_uri: redirectURI,
        grant_type: grantType
      }
    }).done(function(data, textStatus, jqXHR) {
      Ember.Logger.debug("successful signin", jqXHR, textStatus);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      Ember.Logger.debug("failed signin, hacking our way through", jqXHR, textStatus, errorThrown);
    });
  },
  
  getQueryParameter: function(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
    return results == null ? "" : window.decodeURIComponent(results[1].replace(/\+/g, " "));
  }
});

export default ConfirmRoute;
