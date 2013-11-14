var MerchantModel = DS.Model.extend({
  title: DS.attr("string"),
  startDate: DS.attr("date"),
  endDate: DS.attr("date"),
  numToSkip: DS.attr("number"),
  numToShow: DS.attr("number")
});

export default MerchantModel;
