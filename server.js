var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

//Allows express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./app/public'));
//Routes

require('./app/routing/htmlroutes.js')(app);
require('./app/routing/apiroutes.js')(app);

app.listen(PORT)