// using the express module
var express = require("express");
var app = express();
// defining the path
const path = require('path');

// in order to get parameters
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true }));

app.use(bodyParser.json());
app.use(express.static("public"));

// THE HTML PAGE
app.get("/", function (_req, res) {
  // redirecting page to index html file
  res.sendFile(path.join(__dirname + '/index.html'));
});


// mongo module/database in use
const MongoClient = require("mongodb").MongoClient;

// env parameters
require("dotenv").config();

// set user ID & Password from the environment
var user = process.env.MONGO_USERID
var pw = process.env.MONGO_PW

// web server by Express
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("REST api is listening on PORT %d", PORT);
});