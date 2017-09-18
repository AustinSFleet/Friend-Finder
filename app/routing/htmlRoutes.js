// path is added to allow the correct file path to be used/specified

var path = require('path');

//routes

module.exports = function(app){
//first route will allow the survey page to be reached through the correct path.


  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });


//default path takes user to the home page if path specified is not recognized.


  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});
};