var FixtureAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(fixtures, query, type) {
    return fixtures.filter(function(fixture) {
      for(var key in query) {
        var val = null;
        
        if (!query.hasOwnProperty(key)) continue; 
        
        val = query[key];
        
        if (fixture[key] !== val) { 
          return false; 
        }
      }
      return true;
    });
  }
});

export default FixtureAdapter;
