/*===========server.js==================
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
*/
//Dependencies
var express = require ("express");
var bp = require ("body-parser");
var path = require ("path");

// Sets up Express 
var app = express();

// Sets up Express data parsing
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: 'application/vnd.api+json' }));

//Routing
var PORT = 3000;
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//Listener
app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});





