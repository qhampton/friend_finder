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
        //go through the user's data via loop
        //find the best match by comparing again each friend in db
        //user another loop to comare the values
        //calculate the difference in values
        //push new friend into friends array
        friends.push(newFriend);
        res.json(friends[index]);
    });
}