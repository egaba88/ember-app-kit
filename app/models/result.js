var ResultModel = DS.Model.extend({
  referrer: DS.attr("string"),
  agent: DS.attr("string"),
  email: DS.attr("string"),
  blob: DS.attr("string"),
  date: DS.attr("date"),
  merchant: DS.belongsTo("merchant")
});

export default ResultModel;
