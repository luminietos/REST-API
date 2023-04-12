// use express module
var express = require("express");
var app = express();

// web server by Express
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("REST api is listening on PORT %d", PORT);
});