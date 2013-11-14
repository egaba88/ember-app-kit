var MerchantController = Ember.ArrayController.extend({
  reviews: function() {
    return this.get("model.content");
  }.property("reviews"),
  
  convertToCSV: function(objArray) {
    var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    var head = array[0];

    for (var index in array[0]) {
      var value = index + "";
      line += '"' + value.replace(/"/g, '""') + '",';
    }

    line = line.slice(0, -1);
    str += line + '\r\n';

    for (var i = 0; i < array.length; i++) {
      line = '';

      for (var indexInner in array[i]) {
        var val = array[i][indexInner] + "";
        line += '"' + val.replace(/"/g, '""') + '",';
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }
    return str;
  },
  
  actions: {
    applyFilter: function() {
      var startDate = Ember.$("#startDate").datepicker("getDate");
      var endDate = Ember.$("#endDate").datepicker("getDate");
      
      if (!startDate) {
        startDate = new Date("January 1, 1970");
      }
      
      if (!endDate) {
        endDate = new Date("January 1, 2050");
      }
      
      this.startDate = startDate;
      this.endDate = endDate;
      
      if (startDate <= endDate) {
        var reviews;
        
        reviews = this.get("model.content").filter(function(review) {
          var date = new Date(review.get("date"));
          return (startDate <= date) && (date <= endDate);
        });
        
        this.set("reviews", reviews);
      }
      else {
        Ember.Logger.debug(startDate, endDate);
        window.alert("Start date must be before End Date");
      }
    },
    download: function() {
      try {
        var json = JSON.stringify(this.get("reviews"));
        var csv = this.convertToCSV(json);
        window.open("data:text/csv; charset=utf-8, " + window.escape(csv));
      }
      catch(e) {
        Ember.Logger.warn("Could not download as CSV: ", e.message);
        Ember.Logger.warn(e);
      }
    }
  }
});

export default MerchantController;