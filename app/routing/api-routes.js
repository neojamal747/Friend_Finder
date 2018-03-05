/*
Your api-routes.js file should contain two routes:
	-A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	-A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

//Dependencies
var friendsArray = require("../data/friends.js");
var questionsArray = require("../data/questions.js");
var Friend = require("../public/js/logic.js");

module.exports = function(app){

	app.get("/api/questions", function(request, response){
		response.json(questionsArray);
	});

	app.get("/api/friends", function(request, response){
		response.json(friendsArray);
	});

	app.post("/api/friends", function(request, response){
		// //Add new user object
		var incoming = request.body;
		var friendObj = new Friend (incoming.name, incoming.photoURL, incoming.scores);
		console.log("friendObj: " + JSON.stringify(friendObj, null, 2));

		//run totalDifference(
		friendObj.totalDifference();
		console.log("friendObj.bestMatch: " + friendObj.bestMatch);

		//Push new user to friendsArray
		friendsArray.push(friendObj);

		//Send back the matched user
		response.json(friendObj.bestMatch);
	});
}




