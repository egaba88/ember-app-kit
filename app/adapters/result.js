var ResultAdapter = DS.RESTAdapter.extend({
  host: "http://localhost:3000",
  
  method: "GET",
  
  headers: {
    "Authorization": "Basic am9leTptb3RoZXJmdWNraW5ncmFoaW1p"
  },
  
  ajax: function(url, type, hash) {
    var adapter = this;
    
    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.data = hash.data || {};
      hash.data.skip = hash.data.skip || 0;
      hash.data.take = hash.data.take || 100;

      hash.success = function(json) {
        json = adapter.formatJSON(json);
        Ember.run(null, resolve, json);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };
      
      Ember.$.ajax(hash);
    });
  },
  
  ajaxOptions: function(url, type, hash) {
    hash = hash || {};
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.contentType = 'application/json; charset=utf-8';
      hash.data = JSON.stringify(hash.data);
    }

    if (this.headers !== undefined) {
      var headers = this.headers;
      hash.beforeSend = function (xhr) {
        Ember.ArrayPolyfills.forEach.call(Ember.keys(headers), function(key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      };
    }
    
    return hash;
  },
  
  formatJSON: function(json) {
    var data = {};
    
    Ember.$.each(json, function(index, result) {
      result.id = index;
      result.date = result.date.replace(/(\d{1,2})(th|nd|rd)/g, "$1");
    });
    
    data["result"] = json;

    return data;
  }
});

export default ResultAdapter;
