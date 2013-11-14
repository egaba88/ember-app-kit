var MerchantView = Ember.View.extend({
  didInsertElement: function() {
    var view = this;
    var controller = this.get("controller");
    
    Ember.$(".filter input").each(function() {
      var $calendar = $(this);
      var widget;
      
      $calendar.datepicker({
        showAnim: ""
      });
    });
  },
  
  reviewsObserver: function() {
    this.rerender();
  }.observes("controller.reviews")
});

export default MerchantView;
