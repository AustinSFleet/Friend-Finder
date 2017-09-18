var path = require('path');
var people = require('../data/friends.js');


var sumDifference = 0;


module.exports = function(app){

  app.get('/api/friends', function(req, res){
    //i think i need to go to refer to json, but im not specifically sure how
    res.json(friends);
  });

  app.post('/api/survey', function(req, res){

    var bestMatch = {
          name: '',
          matchDifference: 0,
          image: ''
    };

    var userInfo = req.body;
    var userName = userInfo.name;
    var userImage = userInfo.image;
    var userPoints = userInfo.scores;

    for(var i=0; i<people.length; i++){
      console.log(people[i].name)
      matchDifference = 0;
      
      for(var j=0; j<10; j++){
        sumDifference += Math.abs(parseInt(userPoints[i])-parseInt(people[i].scores[j]));

        if(sumDifference<=bestMatch.matchDifference){
            bestMatch.name = people[i].name;
            bestMatch.image = people[i].image;
            bestMatch.matchDifference = sumDifference;
        } else {
          bestMatch.name = "dude";
          bestMatch.image = "place";
          bestMatch.matchDifference = 2000;
        }
      }
    }

    people.push(userInfo);
    // bestMatch={'test':'sendmestuff'}
    res.json(bestMatch);
  });
}