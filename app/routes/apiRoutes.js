// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================
var friends = require('../data/friends.js');

// ROUTING
// ===============================================================================
module.exports = function(app){
    // API GET Requests
    // Below code handles when users "visit" a page.
    app.get('/api/friends',function(req,res){
        // Display friends object
        res.json(friends);
    });
    // Below code handles when a user submits a form and thus submits data to the server.
    app.post('/api/friends',function(req,res){
        var newFriend = req.body;
        //logic to add friend
        //logic to match friend
        friends.push(newFriend);
        res.json(friends[index]);
    });
}