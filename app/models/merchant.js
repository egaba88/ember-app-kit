var MerchantModel = DS.Model.extend({
  merchant: DS.attr("string"),
  results: DS.hasMany("result", { embedded: true })
});

export default MerchantModel;
