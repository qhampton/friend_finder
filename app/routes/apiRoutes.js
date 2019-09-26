// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on _____-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // How to get and post data to and from your database
  // ---------------------------------------------------------------------------
  // when you got to the url route get your data as a json
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var bestMatch = {};
    //take in front-end data
    //manipulates to return best match
    //sending the best match to the front-end
    res.json(bestMatch);
  });
}
