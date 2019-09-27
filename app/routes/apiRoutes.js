// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================
var friends = require('../data/friends.js');
var findAVG = function (arr){
    let sum = arr.reduce((previous, current) => current += previous);
    return sum / arr.length;
}
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
        var bestIndex = 0;
        var bestDiff=999;
        console.log(req.body);
        //go through the user's data via loop
        for (var i=0; i < friends.length; i++){
            var friendAVG = findAVG(friends[i].scores);
            var newFriendAVG = findAVG(newFriend.scores);
            console.log ("current friend: " + friendAVG);
            if(bestDiff > Math.abs(friendAVG-newFriendAVG)){
                bestDiff = Math.abs(friendAVG-newFriendAVG);
                bestIndex = i;
            }            
        }
        console.log ("new friend: " + findAVG(newFriend.scores));
        //find the best match by comparing again each friend in db
        //user another loop to compare the values
        //calculate the difference in values
        //push new friend into friends array
        friends.push(newFriend);
        res.json(friends[bestIndex]);

    });
}