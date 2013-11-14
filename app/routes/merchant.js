var MerchantRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params) {
    return this.get("store").find("result", { merchant: params.merchant });
  },
  
  afterModel: function(results) {
    if (this.get("controller")) {
      this.set("controller.reviews", results);
    }
  }
});

export default MerchantRoute;
