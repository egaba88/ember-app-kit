var MerchantRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").find("result", { merchant: params.merchant });
  }
});

export default MerchantRoute;
