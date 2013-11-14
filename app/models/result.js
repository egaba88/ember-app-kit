var ResultModel = DS.Model.extend({
  referrer: DS.attr("string"),
  agent: DS.attr("string"),
  email: DS.attr("string"),
  blob: DS.attr("string"),
  date: DS.attr("string"),
  ticket: DS.attr("string"),
  assignee: DS.attr("string"),
  status: DS.attr("string"),
  notes: DS.attr("string")
});

export default ResultModel;
