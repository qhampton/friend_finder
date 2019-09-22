// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on _____-data, waitinglist, etc.
// ===============================================================================

var _____Data = require("../data/_____Data");
var _______2Data = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the _____)
  // ---------------------------------------------------------------------------

  app.get("/api/_______", function(req, res) {
    res.json(_____Data);
  });

  app.get("/api/_______2", function(req, res) {
    res.json(_______2Data);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the _____Data array)
  // ---------------------------------------------------------------------------

  app.post("/api/_______", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a _____ or not.
    // It will do this by sending out the value "true" have a _____
    // req.body is available since we're using the body parsing middleware
    if (_____Data.length < 5) {
      _____Data.push(req.body);
      res.json(true);
    }
    else {
      _______2Data.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the _____ while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    _____Data.length = 0;
    _______2Data.length = 0;

    res.json({ ok: true });
  });
};
